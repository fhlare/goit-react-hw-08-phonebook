import { Formik } from 'formik';
import {
  Form,
  Field,
  ErrorMessage,
  FormGroup,
  IoPersonSharp,
  InputContainer,
  IoMdMail,
  RiLockPasswordFill,
  FormButton,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { resetError } from '../../redux/auth/authSlice';

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
  const { isRejected } = useAuth();

  useEffect(() => {
  if (isRejected) {
    toast.error('Oops! Something went wrong. Try again please');
  }
    dispatch(resetError());
  
},[dispatch, isRejected]);

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
          <InputContainer>
            <Field type="name" name="name" autoComplete="off" />
            <IoPersonSharp />
          </InputContainer>
          <ErrorMessage name="name" component="span" />
        </FormGroup>
        <FormGroup>
          Email
          <InputContainer>
            <Field type="email" name="email" autoComplete="off" />
            <IoMdMail />
          </InputContainer>
          <ErrorMessage name="email" component="span" />
        </FormGroup>
        <FormGroup>
          Password
          <InputContainer>
            <Field type="password" name="password" autoComplete="off" />
            <RiLockPasswordFill />
          </InputContainer>
          <ErrorMessage name="password" component="span" />
        </FormGroup>
        <FormButton type="submit">Register</FormButton>
      </Form>
    </Formik>
  );
};
