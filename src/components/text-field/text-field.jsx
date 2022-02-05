//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { TextField as MaterialTextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

/**
 * Represents a text field.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TextField(props) {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
  } = useFormikContext();

  const {
    endAdornmentText,
    startAdornmentText,
    autoComplete,
    disabled,
    label,
    maxLength,
    hidden,
    name,
    placeholder,
    readOnly,
  } = props;

  if (hidden) {
    return null;
  }

  return (
    <MaterialTextField
      id={name}
      name={name}
      fullWidth
      label={label}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      autoComplete={autoComplete}
      placeholder={placeholder}
      inputProps={{
        maxLength,
        readOnly,
        'aria-label': label,
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        startAdornment: startAdornmentText ? (<InputAdornment position="start">{startAdornmentText}</InputAdornment>) : null,
        endAdornment: endAdornmentText ? (<InputAdornment position="end">{endAdornmentText}</InputAdornment>) : null,
      }}
      disabled={disabled}
      variant="outlined"
    />
  );
}

export default TextField;

TextField.propTypes = {
  /**
   * Specifies the type of data stored in the field. Used for auto-completion
   * purposes by the web browser.
   */
  autoComplete: PropTypes.string,

  /**
   * Specifies whether the field is disabled (true) or not (false).
   */
  disabled: PropTypes.bool,

  /**
   * Specifies the text that should appear as an adornment at the end of the
   * text box (if any).
   */
  endAdornmentText: PropTypes.string,

  /**
   * Specifies the text that should appear as an adornment at the start of the
   * text box (if any).
   */
  startAdornmentText: PropTypes.string,

  hidden: PropTypes.bool,

  /**
   * Specifies the name/id of the field.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the caption displayed for the field.
   */
  label: PropTypes.string,

  /**
   * Specifies the placeholder to display for the field.
   */
  placeholder: PropTypes.string,

  /**
   * Specifies the maximum length of the field.
   */
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Specifies that the field is read-only.
   */
  readOnly: PropTypes.bool,
};

TextField.defaultProps = {
  autoComplete: 'off',
  disabled: false,
  hidden: false,
  endAdornmentText: null,
  startAdornmentText: null,
  label: null,
  placeholder: null,
  maxLength: null,
  readOnly: false,
};
