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

const Template = (args) => (
  <MemoryRouter>
    <CustomLink {...args}>Example</CustomLink>
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
};
