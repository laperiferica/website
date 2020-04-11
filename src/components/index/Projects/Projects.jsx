import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

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
                  fixed(quality: 95, width: 320, height: 200) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    }
  `);
  return (
    <StyledProjects>
      {edges
        .map((x) => x.node)
        .map((x, idx) => (
          <div key={idx}>
            <Item {...x.frontmatter} content={x.excerpt} />
          </div>
        ))}
    </StyledProjects>
  );
};

export default Projects;
