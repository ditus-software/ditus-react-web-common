//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

/**
 * Represents a component that displays up/down arrows that allow a user to vote
 * on something.
 *
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Vote(props) {
  const {
    downLabel,
    upLabel,
    onDownVote,
    onUpVote,
    votes,
  } = props;

  const useStyles = makeStyles((theme) => ({
    button: {
      padding: 0,
    },
    vote: {
      textAlign: 'center',
    },
    arrow: {
      color: theme.palette.grey[400],
      fontSize: '3em',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.vote}>
      <IconButton className={classes.button} onClick={onUpVote} aria-label={upLabel}>
        <ArrowDropUpIcon className={classes.arrow} />
      </IconButton>
      <Typography variant="h5">
        {votes ?? 0}
      </Typography>
      <IconButton className={classes.button} onClick={onDownVote} aria-label={downLabel}>
        <ArrowDropDownIcon className={classes.arrow} />
      </IconButton>
    </div>
  );
}

export default Vote;

Vote.propTypes = {
  /**
   * Specifies the text that appears on the down button.
   */
  downLabel: PropTypes.string,

  /**
   * Specifies the number of votes.
   */
  votes: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * Specifies the event to trigger when the down button is clicked.
   */
  onDownVote: PropTypes.func,

  /**
   * Specifies the event to trigger when the up vote button is clicked.
   */
  onUpVote: PropTypes.func,

  /**
   * Specifies the text that appears on the up button.
   */
  upLabel: PropTypes.string,
};

Vote.defaultProps = {
  downLabel: null,
  onDownVote: null,
  onUpVote: null,
  votes: null,
  upLabel: null,
};
