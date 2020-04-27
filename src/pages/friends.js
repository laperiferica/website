import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import List from '../components/friends/List';
import Map from '../components/friends/Map';

const FriendsPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Friends' })} />
    <Section id={'friends'} title={intl.formatMessage({ id: 'Friends' })}>
      <List />
    </Section>
    <Map />
    <div style={{ marginBottom: '-3rem' }} />
  </Layout>
);

FriendsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(FriendsPage);
