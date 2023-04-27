/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Button from '../components/button/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
  },
};

function Template(args) {
  return (
    <MemoryRouter>
      <Button {...args}>Example</Button>
    </MemoryRouter>
  );
}

export const Primary = Template.bind({});

Primary.args = {
};
