import { useAuth } from 'hooks/useAuth';
import { HomeNav, Nav } from './Navigation.styled';
// import css from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <HomeNav to="/">
        {/* <HomeIcon color="primary" /> */}
        Home
      </HomeNav>
      {isLoggedIn && <HomeNav to="/contacts">Contacts</HomeNav>}
    </Nav>
  );
};
