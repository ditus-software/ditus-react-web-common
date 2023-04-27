/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Form } from 'formik';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RatingField from '../components/rating-field/rating-field';

export default {
  title: 'Components/RatingField',
  component: RatingField,
  argTypes: {
  },
};

const theme = createTheme({
});

function Template(args) {
  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{
          example: '',
        }}
      >
        {() => (
          <Form>
            <RatingField name="example" {...args} />
          </Form>
        )}
      </Formik>
    </ThemeProvider>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example',
};
