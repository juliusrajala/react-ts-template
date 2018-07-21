import * as React from 'react';
import styled from 'styled-components';
import { HorizontalBar, StyledLink } from 'src/ui/styles';

const FooterBar = HorizontalBar.extend`
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-family: Montserrat, sans-serif;
  font-weight: 600;

  @media (max-width: 500px), (max-device-width: 500px) {
    > * {
      font-size: 1rem;
    }
  }
`;


const Footer = () => (
  <FooterBar>
    Exists thanks to the&nbsp;
    <StyledLink target="_blank" href="https://spiceprogram.org">
      Spice Program
    </StyledLink>
  </FooterBar>
)

export default Footer;