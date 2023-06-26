import { AuthNavLink, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <AuthNavLink to="/register">Sign Up</AuthNavLink>
      <AuthNavLink to="/login">Sign In</AuthNavLink>
    </Wrapper>
  );
};
