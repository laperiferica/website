import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import List from '../components/friends/List';

const FriendsPage = () => (
  <Layout>
    <SEO title="amigxs" />
    <Section id={'friends'} title={'Amigxs'}>
      <List />
    </Section>
  </Layout>
);

export default FriendsPage;

