import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  Field,
  ErrorMessage,
  FormGroup,
  InputContainer,
  IoPersonSharp,
  FaPhone,
  FormButton,
  Strong,
} from './ContatctForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const newContact = useSelector(selectContacts);

  const handelSubmit = value => {
    const sameContact = newContact.some(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );
    if (sameContact) {
      alert(`${value.name} is alredy contact`);
    } else {
      dispatch(addContact(value));
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        handelSubmit(values);
      }}
    >
      <Form>
        <Strong>Add your contacts</Strong>
        <FormGroup>
          Name
          <InputContainer>
            <Field type="name" name="name" />
            <IoPersonSharp />
          </InputContainer>
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Number
          <InputContainer>
            <Field type="text" name="number" />
            <FaPhone />
          </InputContainer>
          <ErrorMessage name="number" component="span" />
        </FormGroup>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};
