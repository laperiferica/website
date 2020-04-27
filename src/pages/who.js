import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Team from '../components/contact/Team';

const WhoPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Who we are' })} />
    <Section id={'info'} title={intl.formatMessage({ id: 'Who we are' })}>
      <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
    </Section>
    <Section id={'members'}>
      <Team />
    </Section>
  </Layout>
);

WhoPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    text: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

export default injectIntl(WhoPage);

export const pageQuery = graphql`
  query($language: String) {
    text: markdownRemark(
      frontmatter: { id: { eq: "who/intro" }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
  }
`;
