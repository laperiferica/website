import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const ProjectsPage = ({ data, intl }) => {
  const {
    items: { edges },
  } = data;

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'Projects' })} />
      <Section id={'projects'} title={intl.formatMessage({ id: 'Projects' })}>
        <Grid
          items={edges.map((x) => ({
            uri: `/projects/${x.node.frontmatter.slug}`,
            title: x.node.frontmatter.title,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      </Section>
    </Layout>
  );
};

ProjectsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    items: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default injectIntl(ProjectsPage);

export const pageQuery = graphql`
  query($language: String) {
    items: allMarkdownRemark(
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
