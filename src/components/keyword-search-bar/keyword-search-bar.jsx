//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UriUtil } from '@ditus/uri-util';

/**
 * Represents a generic search bar that allows users to search. What the users
 * can search for is dependent on the parent component.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function KeywordSearchBar(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const [value, setValue] = useState('');
  const {
    path,
    parameterName,
    label,
  } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let {
    keywords,
  } = queryString.parse(search);

  keywords = UriUtil.parseStringParameter(keywords, '');

  useEffect(() => {
    setValue(keywords);
  }, [keywords]);

  const handleSearch = () => {
    let url = ''.concat(path, search);
    url = UriUtil.removeParameter(url, parameterName);
    url = UriUtil.addParameter(url, parameterName, value);
    navigate(url);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  return (
    <FormControl variant="outlined" className="keyword-search-bar" fullWidth>
      <InputLabel htmlFor="keywords">{label}</InputLabel>
      <OutlinedInput
        id="keywords"
        value={value}
        label={label}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        inputProps={{ maxLength: 255 }}
        autoComplete="off"
        endAdornment={(
          <InputAdornment position="end">
            <IconButton
              onClick={handleSearch}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )}
      />
    </FormControl>
  );
}

export default KeywordSearchBar;

KeywordSearchBar.propTypes = {
  /**
   * Specifies the label/placeholder to display.
   */
  label: PropTypes.string,

  /**
   * Specifies the parameter name to add to the URL.
   */
  parameterName: PropTypes.string,

  /**
   * Specifies the relative path that the search bar should redirect to upon
   * search.
   */
  path: PropTypes.string.isRequired,
};

KeywordSearchBar.defaultProps = {
  parameterName: 'keywords',
  label: '',
};
