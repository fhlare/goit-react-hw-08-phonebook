import { NavLink } from "./Navigation.styled"

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" >Home</NavLink>
      {/* Тут нужно сделать проверку на {isLoggedIn && (NavLink Contacts)} */}
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  )
}