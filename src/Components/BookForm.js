import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const bookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string()
    .matches(/^[0-9]{13}$/, 'ISBN must be a 13 digit number')
    .required('ISBN is required'),
  pubDate: Yup.date().required('Publication date is required'),
});

const BookForm = ({ onSubmit, book }) => {
  return (
    <Formik
      initialValues={{
        title: book?.title || '',
        author: book?.author || '',
        isbn: book?.isbn || '',
        pubDate: book?.pubDate || '',
      }}
      validationSchema={bookSchema}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form-container">
          <div className="form-group">
            <label>Title</label>
            <Field name="title" className="form-field" />
            <ErrorMessage name="title" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field name="author" className="form-field" />
            <ErrorMessage name="author" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <Field name="isbn" className="form-field" />
            <ErrorMessage name="isbn" component="div" className="form-error" />
          </div>
          <div className="form-group">
            <label>Publication Date</label>
            <Field type="date" name="pubDate" className="form-field" />
            <ErrorMessage name="pubDate" component="div" className="form-error" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
