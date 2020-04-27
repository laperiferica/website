import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

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
      &.active {
        border-bottom: 2px solid var(--primary-color);
      }
      margin: 0 1rem;
      a {
        display: inline-block;
        line-height: 1rem;
        text-align: center;
        font-size: 1.4rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        small {
          font-size: 0.7rem;
          display: inline-block;
        }
      }
    }
  }
`;

const types = [
  { type: 'friend', label: 'Friends' },
  { type: 'liked', label: 'We Love' },
  { type: 'networks', label: 'Networks', sublabel: '(We are members)' },
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
          <li key={idx} className={x.type === type ? 'active' : ''}>
            <a onClick={() => setType(x.type)}>
              <FormattedMessage id={x.label} />
              {x.sublabel && (
                <>
                  <br />
                  <small>
                    <FormattedMessage id={x.sublabel} />
                  </small>
                </>
              )}
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

