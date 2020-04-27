import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';

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
      <Grid
        items={data.projects.edges.map((x) => ({
          uri: `/projects/${x.node.frontmatter.slug}`,
          title: x.node.frontmatter.title,
          image: x.node.frontmatter.image.childImageSharp.fixed,
        }))}
      />
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
    projects: PropTypes.shape({
      edges: PropTypes.array,
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
    projects: allMarkdownRemark(
      filter: {
        fileInfo: { sourceInstanceName: { eq: "projects" } }
        frontmatter: { lang: { eq: $language } }
      }
      sort: { fields: frontmatter___title, order: ASC }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fixed(quality: 95, width: 300, height: 250) {
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
