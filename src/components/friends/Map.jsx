import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Map from '../Map';

const FriendsMap = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "friends" } } }
        sort: { fields: frontmatter___name, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              url
              lat
              lng
              image {
                childImageSharp {
                  fixed(quality: 95, width: 120, height: 120) {
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
    <Map
      items={edges.map((x) => ({
        lat: x.node.frontmatter.lat,
        lng: x.node.frontmatter.lng,
        name: x.node.frontmatter.name,
        url: x.node.frontmatter.url,
        image: x.node.frontmatter.image.childImageSharp.fixed,
      }))}
    />
  );
};

export default FriendsMap;
