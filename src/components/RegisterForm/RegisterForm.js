import { Formik } from 'formik';
import{Form, Field, ErrorMessage, FormGroup} from './RegisterForm.styled' 
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handelSubmit = value => dispatch(register(value));
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        handelSubmit(values);
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field type="name" name="name" autoComplete="off"/>
          <ErrorMessage name="name" component="span" />
        </FormGroup>
        <FormGroup>
          Email
          <Field type="email" name="email" autoComplete="off"/>
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          Password
          <Field type="password" name="password" autoComplete="off"/>
          <ErrorMessage name="password" component="span" />
        </FormGroup>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
