/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ImageMagnify from '../components/image-magnify/image-magnify';

export default {
  title: 'Components/ImageMagnify',
  component: ImageMagnify,
  argTypes: {
  },
};

const Template = (args) => (
  <ImageMagnify {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};
