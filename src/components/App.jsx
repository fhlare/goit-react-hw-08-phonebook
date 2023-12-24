import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';


const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(()=> import('../pages/Contacts/Contacts'))
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing?(<b>Refreshing user...</b>):(
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/contacts" element={<ContactsPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  );
};
