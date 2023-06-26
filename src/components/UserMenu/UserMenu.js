import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogOutBtn, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <LogOutBtn
        variant="outlined"
        onClick={() => dispatch(logOut())}
        styles={{ backGroundColor: 'grey' }}
      >
        Logout
      </LogOutBtn>
    </Wrapper>
  );
};
