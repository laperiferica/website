import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const LatestProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { projects, programs } = useStaticQuery(graphql`
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
      programs: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "programs" } } }
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

  const filter = (x) =>
    searchTerm.trim() === '' ||
    x.node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <Layout>
      <SEO title="Proyectos" />
      <Section id={'projects'} title={'Nuestros Proyectos'}>
        <input
          type={'text'}
          placeholder={'Buscar proyecto...'}
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.currentTarget.value)}
        />
        <Grid
          items={projects.edges.filter(filter).map((x) => ({
            uri: `/projects/${x.node.frontmatter.slug}`,
            title: x.node.frontmatter.title,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      </Section>
      <Section id={'programs'} title={'Programas Involucrados'}>
        <Grid
          items={programs.edges.map((x) => ({
            uri: `/programs/${x.node.frontmatter.slug}`,
            title: x.node.frontmatter.title,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      </Section>
    </Layout>
  );
};

export default LatestProjects;

