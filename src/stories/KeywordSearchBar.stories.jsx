/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import KeywordSearchBar from '../components/keyword-search-bar/keyword-search-bar';

export default {
  title: 'Components/KeywordSearchBar',
  component: KeywordSearchBar,
  argTypes: {
  },
};

function Template(args) {
  return (
    <MemoryRouter>
      <KeywordSearchBar {...args} />
    </MemoryRouter>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
