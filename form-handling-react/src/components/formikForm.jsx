// src/components/formikForm.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  email: '',
  password: ''
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function FormikForm() {
  const handleSubmit = (values) => {
    console.log('Formik form submitted:', values);
    // Simulate API call here
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <h2>Formik Registration Form</h2>
        <div>
          <label>Username:</label>
          <Field name="username" />
          <ErrorMessage name="username" component="p" />
        </div>
        <div>
          <label>Email:</label>
          <Field name="email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
