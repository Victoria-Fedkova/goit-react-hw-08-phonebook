import ContactForm from 'components/ContactForm/ContactForm';
import { Container, Heading } from '../components/App.styled';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <Container>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
