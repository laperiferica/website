import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Grid from '../Grid';

const LatestProjects = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
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
    <Grid
      items={edges.map((x) => ({
        uri: `/projects/${x.node.frontmatter.slug}`,
        title: x.node.frontmatter.title,
        image: x.node.frontmatter.image.childImageSharp.fixed,
      }))}
    />
  );
};

export default LatestProjects;
