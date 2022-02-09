/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Vote from '../components/vote/vote';

export default {
  title: 'Components/Vote',
  component: Vote,
  argTypes: {
  },
};

const theme = createTheme({
});

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Vote {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
};
