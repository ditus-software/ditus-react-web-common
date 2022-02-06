//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';
import classnames from 'classnames';
import './custom-link.css';

/**
 * Represents a link that the user can click to navigate to another screen.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function CustomLink(props) {
  const {
    hidden,
    children,
    className,
    onClick,
    path,
  } = props;

  if (children && !hidden) {
    return (
      <MaterialLink
        onClick={onClick}
        className={classnames('custom-link', className)}
        to={onClick ? '#' : path}
        component={onClick ? null : RouterLink}
        variant="body1"
      >
        {children}
      </MaterialLink>
    );
  }

  return null;
}

export default CustomLink;

CustomLink.propTypes = {
  /**
   * Specifies the class to apply to the resulting element.
   */
  className: PropTypes.string,

  /**
   * Specifies the children.
   */
  children: PropTypes.node,

  /**
   * Specifies whether the component is hidden or not.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the function to invoke when the link is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Specifies the relative URL (path) used to display the task/screen.
   */
  path: PropTypes.string,
};

CustomLink.defaultProps = {
  children: null,
  className: null,
  hidden: false,
  onClick: null,
  path: null,
};
