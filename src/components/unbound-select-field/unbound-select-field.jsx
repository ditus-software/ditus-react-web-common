//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

/**
 * Represents a select/combo/drop-down field that is not used on a Formik form.
 * This component abstracts away the underlying framework being used to display
 * select fields and provides consistency and should be used.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function UnboundSelectField(props) {
  const {
    autoComplete,
    data,
    label,
    name,
    hidden,
    helperText,
    error,
    onBlur,
    onChange,
    onFocus,
    value,
  } = props;

  if (hidden) {
    return null;
  }

  // If the data does not start with an empty element, add a blank item to the
  // top of the select.
  if (data && data.length && Object.keys(data[0]).length !== 0) {
    data.unshift({});
  }

  // NOTE: The assignment of 'blank' as a key in these blocks is necessary since
  // a blank item was added with a null ID that will display at the top of each
  // drop down. But since the key is the ID, if it is null, react will complain
  // that not all of the items have a key. This prevents that, while giving the
  // first blank item a valid key.
  const items = data && data.map((x) => (
    <MenuItem value={x.id} key={x.id ? x.id : 'blank'}>{x.name}</MenuItem>
  ));

  const options = data && data.map((x) => (
    <option value={x.id} key={x.id ? x.id : 'blank'}>{x.name}</option>
  ));

  const labelId = `${name}Label`;

  // There are two selects below, one that is optimized for mobile devices and
  // the other that is optimized for desktop devices.
  return (
    <>
      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            native
            className="d-block d-sm-none"
            labelId={labelId}
            id={name}
            name={name}
            helperText={helperText}
            label={label}
            value={value ?? ''}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
          >
            {options}
          </Select>
          <FormHelperText error={error}>
            {helperText}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id={labelId}>{label}</InputLabel>
          <Select
            className="d-none d-sm-block"
            labelId={labelId}
            id={name}
            name={name}
            label={label}
            helperText={helperText}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            autoComplete={autoComplete}
            value={value ?? ''}
          >
            {items}
          </Select>
          <FormHelperText error={error}>
            {helperText}
          </FormHelperText>
        </FormControl>
      </Box>
    </>
  );
}

export default UnboundSelectField;

UnboundSelectField.propTypes = {
  /**
   * Specifies the type of data stored in the field. Used for auto-completion
   * purposes by the web browser.
   */
  autoComplete: PropTypes.string,

  /**
   * Specifies the data used to populate the field. There needs to be an 'id'
   * and 'name' property for each item in the array.
   */
  data: PropTypes.arrayOf(PropTypes.shape),

  /**
   * Specifies the name/id of the field.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the caption displayed for the field.
   */
  label: PropTypes.string,

  /**
   * Specifies the event that occurs when the value of the field changes.
   */
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  hidden: PropTypes.bool,
  helperText: PropTypes.node,

  error: PropTypes.bool,

  /**
   * Specifies the value of the field.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

UnboundSelectField.defaultProps = {
  autoComplete: null,
  data: [],
  label: null,
  onChange: null,
  hidden: false,
  helperText: null,
  error: false,
  onFocus: null,
  onBlur: null,
  value: null,
};
