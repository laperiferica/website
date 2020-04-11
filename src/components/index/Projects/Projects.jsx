import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../../Container';
import Item from './Item';

const StyledProjects = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
  justify-items: center;
`;

const Projects = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "projects" } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              image {
                childImageSharp {
                  fluid(quality: 95) {
                    ...GatsbyImageSharpFluid_withWebp
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
    <Container id={'proyectos'}>
      <h2>Proyectos</h2>
      <StyledProjects>
        {edges
          .map((x) => x.node)
          .map((x, idx) => (
            <div key={idx}>
              <Item
                title={x.frontmatter.title}
                image={x.frontmatter.image}
                content={x.html}
              />
            </div>
          ))}
      </StyledProjects>
    </Container>
  );
};

export default Projects;
