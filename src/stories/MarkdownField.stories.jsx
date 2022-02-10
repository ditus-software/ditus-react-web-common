/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Form } from 'formik';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MarkdownField from '../components/markdown-field/markdown-field';

export default {
  title: 'Components/MarkdownField',
  component: MarkdownField,
  argTypes: {
  },
};

const theme = createTheme({
});

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <Formik
      initialValues={{
        example: '',
      }}
    >
      {() => (
        <Form>
          <MarkdownField name="example" {...args} />
        </Form>
      )}
    </Formik>
  </ThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example',
};
