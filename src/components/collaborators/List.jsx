import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Persons from '../Persons';

const List = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "collaborators" } } }
        sort: { fields: frontmatter___name, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              url
              image {
                childImageSharp {
                  fixed(quality: 95, width: 190, height: 190) {
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
    <Persons
      items={edges.map((x) => ({
        uri: x.node.frontmatter.url,
        name: x.node.frontmatter.name,
        image: x.node.frontmatter.image.childImageSharp.fixed,
      }))}
    />
  );
};

export default List;

