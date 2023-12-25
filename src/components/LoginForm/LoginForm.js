import { Formik } from 'formik';
import {
  Field,
  Form,
  ErrorMessage,
  FormGroup,
  InputContainer,
  IoMdMail,
  RiLockPasswordFill,
  FormButton,
} from './LoginForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { resetError } from '../../redux/auth/authSlice';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('No password provided.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

const { isRejected } = useAuth();

  useEffect(() => {
  if (isRejected) {
    toast.error('Oops! Something went wrong. Try again please');
  }
    dispatch(resetError());
  
},[dispatch, isRejected]);
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
      <Form>
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
        <FormButton type="submit">Log In</FormButton>
      </Form>
    </Formik>
  );
};
