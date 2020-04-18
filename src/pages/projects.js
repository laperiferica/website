import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const LatestProjects = () => {
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
                  fixed(quality: 95, width: 410, height: 300) {
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
      <SEO title="Proyectos" />
      <Section id={'projects'} title={'Nuestros Proyectos'}>
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

export default LatestProjects;
