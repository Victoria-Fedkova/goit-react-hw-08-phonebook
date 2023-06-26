import { useAuth } from 'hooks/useAuth';
import Typography from '@mui/material/Typography';
import { HomeWrapper } from 'components/App.styled';
import { AuthNavLink } from 'components/AuthNav/AuthNav.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <HomeWrapper>
      <Typography variant="h2" color="white" mt="34px" gutterBottom>
        Phone<b>BOOK</b>
      </Typography>
      <Typography variant="h6" mb="24px" color="white" gutterBottom>
        Simple - Intuitive - Efficeint
      </Typography>
      <Typography variant="subtitle1" mb="84px" color="white" gutterBottom>
        Your phonebook is safe and easy to use. It's perfect <br />
        without compromising on look and feel.
      </Typography>

      {!isLoggedIn ? (
        <Typography variant="h5" color="#007bff" gutterBottom>
          Please
          <AuthNavLink to="/login">Log in</AuthNavLink>
          to be able to use your PhoneBook{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Typography>
      ) : (
        <Typography variant="h5" color="#007bff" gutterBottom>
          Go to the
          <AuthNavLink to="/contacts">Contacts</AuthNavLink>
          to use it efficeintly
        </Typography>
      )}
    </HomeWrapper>
  );
}
