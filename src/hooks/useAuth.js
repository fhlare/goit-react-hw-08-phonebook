import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectIsRejected,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoadingAuth = useSelector(selectIsLoading);
  const isRejected = useSelector(selectIsRejected);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoadingAuth,
    isRejected,
  };
};