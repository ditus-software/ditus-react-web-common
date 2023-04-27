/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import CustomLink from '../components/custom-link/custom-link';

export default {
  title: 'Components/CustomLink',
  component: CustomLink,
  argTypes: {
  },
};

function Template(args) {
  return (
    <MemoryRouter>
      <CustomLink {...args}>Example</CustomLink>
    </MemoryRouter>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
