import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Team from '../components/Team';

const WhoPage = ({ data, intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Who we are' })} />
    <Section id={'info'} title={intl.formatMessage({ id: 'Who we are' })}>
      <div dangerouslySetInnerHTML={{ __html: data.text.html }} />
    </Section>
    <Team
      items={data.team.edges.map((x) => ({
        uri: `/who/team/${x.node.frontmatter.slug}`,
        name: x.node.frontmatter.name,
        image: x.node.frontmatter.image.childImageSharp.fixed,
        tasks: x.node.frontmatter.tasks,
        email: x.node.frontmatter.email,
      }))}
    />
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
    team: allMarkdownRemark(
      filter: {
        fileInfo: { sourceInstanceName: { eq: "team" } }
        frontmatter: { lang: { eq: $language } }
      }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            tasks
            image {
              childImageSharp {
                fixed(quality: 95, width: 160, height: 160) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
