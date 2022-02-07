//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

/**
 * Represents a button that is transparent. This component should be used
 * instead of using an anchor tag as a button.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function TransparentButton(props) {
  const {
    children,
    onClick,
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      borderStyle: 'none',
      '&:focus': {
        boxShadow: 'none',
      },
      '&:active': {
        '&:focus': {
          boxShadow: 'none',
        },
        boxShadow: 'none',
      },
      padding: 0,
      '&:hover': {
        background: theme.palette.background.default,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Button
      disableElevation
      disableRipple
      disableFocusRipple
      className={classes.root}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default TransparentButton;

TransparentButton.propTypes = {
  /**
   * Specifies the event handler to invoke when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Specifies the children that appear within the button.
   */
  children: PropTypes.node,
};

TransparentButton.defaultProps = {
  children: null,
  onClick: null,
};
