import * as React from "react";
import styled from "styled-components";

const P1 = `Did you know that giraffes use their heads as weapons?`;
const P2 = `
  I think this is super terrifying. Imagine going about your
  business and just happening upon a pair of giraffes flailing their
  heads at each other to assert superiority.
`;
const P3 = `
  Nature can be weird. Then again, I'm sitting inside on a beautiful
  and warm summer day, writing placeholders that nobody will likely read.
`;

const Section = styled.section`
  width: 600px;
  max-width: 100%;
  text-align: left;
`;

interface Props {
  target: string;
}

const Greeting = (props: Props) => {
  return (
    <Section>
      <h1>Hello {props.target}!</h1>
      <p>{P1}</p>
      <p>{P2}</p>
      <p>{P3}</p>
    </Section>
  );
};

export default Greeting;
