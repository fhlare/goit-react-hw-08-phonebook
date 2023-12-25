import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Container, MainWrapper } from './Layout.styled';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<Loader/>}>
          <MainWrapper>
            <Outlet />
          </MainWrapper>
        </Suspense>
      </main>
      <GlobalStyle />
    </Container>
  );
};

export default Layout;
