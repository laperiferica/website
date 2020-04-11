import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../../Container';
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
    <Container id={'equipo'}>
      <StyledTeam>
        <h2>Equipo</h2>
        <ul>
          {edges
            .map((x) => x.node)
            .map((x, idx) => (
              <li key={idx}>
                <Member
                  name={x.frontmatter.name}
                  image={x.frontmatter.image}
                  tasks={x.frontmatter.tasks}
                />
              </li>
            ))}
        </ul>
      </StyledTeam>
    </Container>
  );
};

export default Team;
