import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth"
import { UserButton, UserText, Wrapper } from "./UserMenu.styled"
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <UserText>Welcome, {user.name}</UserText>
      <UserButton type="button" onClick={() => dispatch(logOut())}>Logout</UserButton>
    </Wrapper>
  );
};