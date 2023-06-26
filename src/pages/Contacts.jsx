import ContactForm from 'components/ContactForm/ContactForm';
import { Heading } from '../components/App.styled';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
