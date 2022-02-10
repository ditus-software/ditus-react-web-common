/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import UnboundSelectField from '../components/unbound-select-field/unbound-select-field';

export default {
  title: 'Components/UnboundSelectField',
  component: UnboundSelectField,
  argTypes: {
  },
};

const Template = (args) => (
  <UnboundSelectField name="example" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example',
};
