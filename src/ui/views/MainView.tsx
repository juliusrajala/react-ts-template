import * as React from 'react';
import { Heading, Page, Paragraph } from 'src/ui/styles';
import styled from 'styled-components';

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

const Greeting = styled.section`
  width: 600px;
  max-width: 100%;
  text-align: left;
`;

const MainView = (props) => {
  return (
    <Page>
      <Greeting>
        <Heading>Hello World!</Heading>
        <Paragraph>{P1}</Paragraph>
        <Paragraph>{P2}</Paragraph>
        <Paragraph>{P3}</Paragraph>
      </Greeting>
    </Page>
  )
}

export default MainView;