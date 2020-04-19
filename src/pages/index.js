import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Featured from '../components/home/Featured';
import LatestProjects from '../components/home/LatestProjects';
import Who from '../components/home/Who';

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Home' })} />
    <Section id={'featured'} title={intl.formatMessage({ id: 'Stand out...' })}>
      <Featured />
    </Section>
    <Section id={'quienes-somos'} title={'La Periférica Cultura Contemporánea'}>
      <Who />
      <Link to={'/who'}>Conócenos mejor...</Link>
    </Section>
    <Section
      id={'latest-projects'}
      title={intl.formatMessage({ id: 'Latest Projects' })}
    >
      <LatestProjects />
    </Section>
  </Layout>
);

IndexPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(IndexPage);
