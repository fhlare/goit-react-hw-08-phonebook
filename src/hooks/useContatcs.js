import { useSelector } from "react-redux"
import { selectContacts, selectError, selectLoading } from "../redux/contacts/contactsSelectors"

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return {
    contacts,
    isError,
    isLoading,
  };
};