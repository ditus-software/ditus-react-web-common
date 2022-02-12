/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Logo from '../components/logo/logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
  },
};

const Template = (args) => (
  <Logo name="example" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};
