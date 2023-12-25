import { NavContainer, NavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </NavContainer>
  );
};
