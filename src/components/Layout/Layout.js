import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Container, MainWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <main>
        <Suspense fallback={<p><b>Loading...</b></p>}>
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
