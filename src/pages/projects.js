import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const ProjectsPage = ({ intl }) => {
  const {
    projects: { edges },
  } = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
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
  `);

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
};

export default injectIntl(ProjectsPage);
