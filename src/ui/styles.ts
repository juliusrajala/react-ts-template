import styled from 'styled-components';

const PADDING: number = 10;

/*
  Master file for shared component styles.
*/

export const Page = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${PADDING * 2}px;
`;

export const HorizontalBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${PADDING}px;
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  font-family: Montserrat, sans-serif;
  color: #e84118;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: #e84118;
  padding: ${PADDING}px 0;
`;

export const Paragraph = styled.p`
  text-align: left;
  padding: ${PADDING/2}px 0;
  line-height: 1.4;
  font-size: 1.2rem;
  font-family: Merriweather, serif;
`;
