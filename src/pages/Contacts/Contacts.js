import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContatctForm';
import { Filter } from 'components/Filter/Filter';
import { useContacts } from '../../hooks/useContatcs';
import { Container, ListContainer } from './Contacts.styled';
import { Loader } from '../../components/Loader/Loader';

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, contacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Container>
      <ContactForm />
      </Container>
      <ListContainer>
      {contacts.length > 0 && <Filter />}
      {isLoading? (<Loader/>):(<ContactList />)}
      </ListContainer>
    </>
  );
}

export default Contacts;
