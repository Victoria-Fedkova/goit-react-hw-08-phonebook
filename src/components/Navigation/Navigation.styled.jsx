import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  color: white;
  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const HomeNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 1.5;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  font-weight: 400;
  color: #fff;

  &:hover,
  &.active {
    color: #007bff;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
