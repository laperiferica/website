import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import LatestProjects from '../components/home/LatestProjects';

const IndexPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Home' })} />
    <Section id={'quienes-somos'} title={'La Periférica Cultura Contemporánea'}>
      <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
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
  data: PropTypes.shape({
    text: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

export default injectIntl(IndexPage);

export const pageQuery = graphql`
  query($language: String) {
    text: markdownRemark(
      frontmatter: { id: { eq: "home/who" }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
  }
`;
