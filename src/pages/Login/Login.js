import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container } from './Login.styled';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../../components/Loader/Loader';

function Login() {
  const { isLoadingAuth } = useAuth();
  return (
    <>
      {isLoadingAuth ? (
        <Loader />
      ) : (
        <Container>
          <LoginForm />
        </Container>
      )}
    </>
  );
}

export default Login;
