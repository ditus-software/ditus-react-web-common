//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays the logo.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Logo(props) {
  const {
    className,
    logoUrl,
    name,
  } = props;

  if (logoUrl) {
    return (
      <img className={className} src={logoUrl} alt={name || ''} />
    );
  }

  if (name) {
    return (
      <span className={className}>{name}</span>
    );
  }

  return null;
}

export default Logo;

Logo.propTypes = {
  /**
   * Specifies the class to apply to the resulting element.
   */
  className: PropTypes.string,

  /**
   * Specifies the URL of the image to display as the logo (if any).
   */
  logoUrl: PropTypes.string,

  /**
   * Specifies the text to display when no image is provided or as the alternate
   * text of the image.
   */
  name: PropTypes.string,
};

Logo.defaultProps = {
  className: null,
  logoUrl: null,
  name: null,
};
