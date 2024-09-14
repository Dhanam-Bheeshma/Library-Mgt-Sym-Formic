import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const authorSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth date is required'),
  biography: Yup.string().required('Biography is required'),
});

const AuthorForm = ({ onSubmit, author }) => {
  return (
    <Formik
      initialValues={{
        name: author?.name || '',
        birthDate: author?.birthDate || '',
        biography: author?.biography || '',
      }}
      validationSchema={authorSchema}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form-container">
          <div className="form-group">
            <label>Name</label>
            <Field name="name" className="form-field" />
            <ErrorMessage name="name" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <Field type="date" name="birthDate" className="form-field" />
            <ErrorMessage name="birthDate" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <Field as="textarea" name="biography" className="form-field" />
            <ErrorMessage name="biography" component="div" className="form-error" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
