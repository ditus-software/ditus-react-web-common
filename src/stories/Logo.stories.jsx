/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Logo from '../components/logo/logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
  },
};

function Template(args) {
  return (
    <Logo name="example" {...args} />
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
