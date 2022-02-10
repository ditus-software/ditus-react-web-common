//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Markdown from '../markdown/markdown';

/**
 * Represents a markdown. This component abstracts away the underlying framework
 * being used to display markdown fields and any associated previews and
 * provides consistency and should be used.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function MarkdownField2(props) {
  const {
    hideBorder,
    hideInput,
    hidePreview,
    hidePreviewHeading,
    label,
    maxLength,
    name,
    placeholder,
    previewHeading,
    previewText,
  } = props;

  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
  } = useFormikContext();

  const useStyles = makeStyles((theme) => ({
    previewText: {
      marginBottom: '0.2em',
    },
    previewHeading: {
      textAlign: 'center',
    },
    markdownNoBorder: {
      marginBottom: '0.2em',
    },
    markdownBorder: {
      borderColor: theme.palette.grey[400],
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '0.25rem',
      paddingTop: '.375rem',
      paddingRight: '.75rem',
      paddingLeft: '.75rem',
      marginBottom: '0.2em',
    },
  }));

  const classes = useStyles();

  return (
    <div>
      {hideInput ? null
        : (
          <TextField
            id={name}
            name={name}
            multiline
            rows={10}
            fullWidth
            label={label}
            placeholder={placeholder}
            value={values[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name]}
            maxLength={maxLength}
            variant="outlined"
            hidden={hideInput}
          />
        )}

      { !hidePreview && values[name] ? (
        <>
          {hidePreviewHeading || !previewHeading ? null : <Typography variant="h6" className={classes.previewHeading}>{previewHeading}</Typography>}
          {previewText ? <Typography variant="body2" className={classes.previewText}>{previewText}</Typography> : null }
          <Markdown
            markdown={values[name]}
            className={hideBorder ?? false ? classes.markdownNoBorder : classes.markdownBorder}
          />
        </>
      ) : null }
    </div>
  );
}

export default MarkdownField2;

MarkdownField2.propTypes = {
  /**
   * Hides the border that appears around the preview.
   */
  hideBorder: PropTypes.bool,

  /**
   * Specifies whether the input portion of the control should be hidden.
   */
  hideInput: PropTypes.bool,

  /**
   * Specifies that the preview area should be hidden.
   */
  hidePreview: PropTypes.bool,

  /**
   * Specifies whether to hide the preview heading.
   */
  hidePreviewHeading: PropTypes.bool,

  /**
   * Specifies the maximum number of characters that can be entered in the
   * field.
   */
  maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

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
   * Specifies the text (if any) that appears above the preview portion of the
   * field.
   */
  previewHeading: PropTypes.string,

  /**
   * Specifies the text (if any) that appears above the preview portion of the
   * field.
   */
  previewText: PropTypes.string,
};

MarkdownField2.defaultProps = {
  hideBorder: false,
  hideInput: false,
  hidePreview: false,
  hidePreviewHeading: false,
  label: null,
  maxLength: null,
  placeholder: null,
  previewHeading: null,
  previewText: null,
};
