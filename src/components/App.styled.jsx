import styled from 'styled-components';
import img from './book.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  color: white;
  background-color: rgba(179, 178, 176, 0.7);

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;

  &::after {
    content: '';
    display: block;
    width: 100%;
    border: 1px solid #f5f5f5;
    margin-top: 1rem;
  }
`;

export const HomeWrapper = styled.div`
  text-align: start;
  margin-bottom: 1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 48px;
    }
  }

  @media screen and (min-width: 576px) {
    background-image: url(${img});
    background-size: 30%;
    background-position-x: 90%;
    background-position-y: 10%;

    background-repeat: no-repeat;
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    background-position-y: 30%;
  }
  @media screen and (min-width: 1200px) {
    background-position-y: 50%;
  }
`;
