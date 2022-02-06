/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '../components/text-field/text-field';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
  },
};

const Template = (args) => (
  <Formik
    initialValues={{
      example: '',
    }}
  >
    {() => (
      <Form>
        <TextField name="example" {...args} />
      </Form>
    )}
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example',
};
