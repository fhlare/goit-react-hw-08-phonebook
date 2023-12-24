import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContatctForm';
import { Filter } from 'components/Filter/Filter';
import { useContacts } from '../../hooks/useContatcs';

function Contacts() {
  const dispatch = useDispatch();
  const { isLoading, contacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      {isLoading && <p>Request in progress...</p>}
      <ContactList />
    </>
  );
}

export default Contacts;
