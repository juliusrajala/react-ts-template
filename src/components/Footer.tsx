import * as React from 'react';
import styled from 'styled-components';

const FooterBar = styled.div`
  padding: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  background: #bb3f3f;
  color: #fff;
  width: 100%;
  text-align: center;

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;
const Footer = () => <FooterBar>Copyright Julius Rajala, 2020</FooterBar>;

export default Footer;
