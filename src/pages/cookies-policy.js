import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const PrivacyPolicyPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Cookies Policy' })} />
    <Section
      id={'cookies-policy'}
      title={intl.formatMessage({ id: 'Cookies Policy' })}
    >
      <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
    </Section>
  </Layout>
);

PrivacyPolicyPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    text: PropTypes.shape({
      html: PropTypes.string,
    }),
  }),
};

export default injectIntl(PrivacyPolicyPage);

export const pageQuery = graphql`
  query($language: String) {
    text: markdownRemark(
      frontmatter: {
        id: { eq: "cookies-policy/main" }
        lang: { eq: $language }
      }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
  }
`;

