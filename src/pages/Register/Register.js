import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from './Register.styled';
import { Loader } from '../../components/Loader/Loader';
import { useAuth } from '../../hooks/useAuth';

function Register() {
  const { isLoadingAuth } = useAuth();
  return (
    <>
      {isLoadingAuth ? (
        <Loader />
      ) : (
        <Container>
          <RegisterForm />
        </Container>
      )}
    </>
  );
}

export default Register;
