import * as React from 'react';
import styled from 'styled-components';

const P1 = `This is a placeholder paragraph. These serve little to no purpose, except to provide some filler content here.`;
const P2 = `
  This is also a placeholder. It holds place for some text that could be here.
`;
const Section = styled.section`
  max-width: 600px;
  width: 100%;
  text-align: left;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-family: Source Sans Pro, sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #cb7723;
`;

const P = styled.p`
  font-family: Source Sans Pro, sans-serif;
  line-height: 1.2;
  font-size: 1.2rem;
  text-align: left;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: 300;
`;

interface Props {
  target: string;
}

const Greeting = (props: Props) => {
  return (
    <Section>
      <H1>Hello {props.target}!</H1>
      <P>{P1}</P>
      <P>{P2}</P>
    </Section>
  );
};

export default Greeting;
