import { Formik } from 'formik';
import { Field, Form, ErrorMessage, FormGroup } from "./LoginForm.styled"
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('No password provided.')
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = value => dispatch(logIn(value));
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        handleSubmit(values);
      }}
    >
      <Form >
        <FormGroup>
          Email
          <Field type="email" name="email" autoComplete="off" />
          <ErrorMessage name="email" component="span"/>
        </FormGroup>

        <FormGroup>
          Password
          <Field type="password" name="password" autoComplete="off" />
          <ErrorMessage name="password" component="span"/>
        </FormGroup>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  )
}