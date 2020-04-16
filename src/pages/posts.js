import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '../components/Grid';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const PostsPage = () => {
  const {
    posts: { edges },
  } = useStaticQuery(graphql`
    {
      posts: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "posts" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "d/M/YYYY")
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
      <SEO title="Noticias" />
      <Section id={'posts'} title={'Noticias'}>
        <Grid
          items={edges.map((x) => ({
            uri: `/posts/${x.node.frontmatter.slug}`,
            date: x.node.frontmatter.date,
            title: x.node.frontmatter.title,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      </Section>
    </Layout>
  );
};

export default PostsPage;
