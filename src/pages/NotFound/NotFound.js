import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundText } from './NotFound.styled';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundText>
        Sorry! Error! Please use this <Link to={'/'}>link</Link> to navigate to
        our home page.
      </NotFoundText>
    </NotFoundContainer>
  );
}