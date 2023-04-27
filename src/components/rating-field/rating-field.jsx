//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { Typography, Rating, InputLabel } from '@mui/material';

/**
 * Represents a star-rating field. This component abstracts away the underlying
 * framework being used to display rating fields and provides consistency and
 * should be used.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function RatingField(props) {
  const {
    errors,
    setFieldValue,
    values,
  } = useFormikContext();

  const {
    label,
    name,
  } = props;

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Rating
        id={name}
        name={name}
        size="large"
        value={values[name] ? +values[name] : null}
        onChange={handleChange}
      />
      <Typography variant="caption" display="block" sx={{ color: 'error.main' }} hidden={!errors[name]}>
        {errors[name]}
      </Typography>
    </div>
  );
}

export default RatingField;

RatingField.propTypes = {
  /**
   * Specifies the name/id of the field.
   */
  name: PropTypes.string.isRequired,

  /**
   * Specifies the caption displayed for the field.
   */
  label: PropTypes.string,
};

RatingField.defaultProps = {
  label: null,
};
