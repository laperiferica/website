import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Member from './Member';

const StyledTeam = styled.section`
  margin: 1rem 0;
  text-align: center;
  > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    > li {
      padding: 1.5rem;
    }
  }
`;

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
    <StyledTeam>
      <ul>
        {edges
          .map((x) => x.node)
          .map((x, idx) => (
            <li key={idx}>
              <Member {...x.frontmatter} />
            </li>
          ))}
      </ul>
    </StyledTeam>
  );
};

export default Team;
