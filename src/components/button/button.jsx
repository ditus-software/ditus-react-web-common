//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaterialButton from '@mui/material/Button';

/**
 * Represents a button. This component abstracts away the underlying framework
 * being used to display buttons and provides consistency and should be used.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Button(props) {
  const history = useHistory();

  const {
    children,
    className,
    disabled,
    link,
    onClick,
    primary,
    submit,
    hidden,
  } = props;

  const handleClick = () => {
    if (link) {
      history.push(link);
    }
  };

  if (hidden) {
    return null;
  }

  return (
    <MaterialButton
      className={className}
      color={primary || submit ? 'primary' : 'inherit'}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      variant="contained"
      onClick={onClick ?? handleClick}
      disableElevation
    >
      {children}
    </MaterialButton>
  );
}

export default Button;

Button.propTypes = {
  /**
   * Specifies the class to apply to the resulting element.
   */
  className: PropTypes.string,

  /**
   * Indicates whether the button is disabled or enabled.
   */
  disabled: PropTypes.bool,

  /**
   * Specifies whether the component is hidden or displayed.
   */
  hidden: PropTypes.bool,

  /**
   * Specifies the path to navigate to when the button is clicked. This is a
   * shortcut over using onClick. Do not specify both onClick and link.
   */
  link: PropTypes.string,

  /**
   * Specifies the event handler to invoke when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Specifies whether the button is the main/primary button.
   */
  primary: PropTypes.bool,

  /**
   * Specifies whether the button is used to submit a form.
   */
  submit: PropTypes.bool,

  /**
   * Specifies the children that appear within the button.
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  hidden: false,
  link: null,
  onClick: null,
  primary: false,
  submit: false,
};
