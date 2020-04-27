import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Persons from '../Persons';

const StyledList = styled.div`
  > ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 0 3rem;
    padding: 0;
    li {
      // display: inline-block;
      text-transform: uppercase;
      a {
        font-size: 1.4rem;
        margin: 1rem;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid var(--primary-color);
        }
      }
    }
  }
`;

const types = [
  { type: 'friend', label: 'Friends' },
  { type: 'liked', label: 'Liked' },
  { type: 'networks', label: 'Networks' },
  { type: 'collaborator', label: 'Collaborators' },
];

const List = () => {
  const [type, setType] = useState('friend');
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
              type
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
    <StyledList>
      <ul>
        {types.map((x, idx) => (
          <li key={idx}>
            <a
              onClick={() => setType(x.type)}
              className={x.type === type ? 'active' : ''}
            >
              {x.label}
            </a>
          </li>
        ))}
      </ul>
      <Persons
        items={edges
          .filter((x) => type === x.node.frontmatter.type)
          .map((x) => ({
            uri: x.node.frontmatter.url,
            name: x.node.frontmatter.name,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
      />
    </StyledList>
  );
};

export default List;

