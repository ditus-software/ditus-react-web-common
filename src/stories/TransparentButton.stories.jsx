/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TransparentButton from '../components/transparent-button/transparent-button';

export default {
  title: 'Components/TransparentButton',
  component: TransparentButton,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <TransparentButton {...args}>Example</TransparentButton>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
};
