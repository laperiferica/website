import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Persons from '../Persons';

const Team = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "team" } } }
        sort: { fields: frontmatter___name, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              slug
              name
              tasks
              social {
                linkedin
                twitter
                facebook
              }
              image {
                childImageSharp {
                  fixed(quality: 95, width: 200) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `);
  return (
    <Persons
      items={edges.map((x) => ({
        uri: `/who/team/${x.node.frontmatter.slug}`,
        name: x.node.frontmatter.name,
        image: x.node.frontmatter.image.childImageSharp.fixed,
        tasks: x.node.frontmatter.tasks,
      }))}
    />
  );
};

export default Team;
