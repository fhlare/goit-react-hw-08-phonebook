import { useAuth } from "hooks/useAuth"
import { NavContainer, NavLink, } from "./Navigation.styled"

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavContainer>
      <NavLink to="/" >Home</NavLink>
      {isLoggedIn && (<NavLink to="/contacts">Contacts</NavLink>)}
      </NavContainer>
    </nav>
  )
}