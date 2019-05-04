import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default props => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>

      <Container>
        <div>
          <Header />
        </div>
        <div >
          {props.children}
        </div>

        <div>
          <Footer />
        </div>

      </Container>
    </div>
  );
};
