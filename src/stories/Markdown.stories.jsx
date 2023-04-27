/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Markdown from '../components/markdown/markdown';

export default {
  title: 'Components/Markdown',
  component: Markdown,
  argTypes: {
  },
};

function Template(args) {
  return (
    <Markdown {...args} />
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
