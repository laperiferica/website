import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const StyledFeatured = styled.section`
  > a {
    &::after {
      display: none;
    }
  }
`;

const Featured = () => {
  const {
    markdownRemark: { html, frontmatter },
  } = useStaticQuery(graphql`
    {
      markdownRemark(fileInfo: { sourceInstanceName: { eq: "featured" } }) {
        frontmatter {
          title
          url
          image {
            childImageSharp {
              fixed(quality: 100, height: 310) {
                ...GatsbyImageSharpFixed_withWebp
              }
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        html
      }
    }
  `);
  return (
    <StyledFeatured>
      <a href={frontmatter.url} target={'_blank'} rel={'noopener noreferrer'}>
        <GatsbyImage
          fixed={frontmatter.image.childImageSharp.fixed}
          alt={frontmatter.title}
        />
      </a>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </StyledFeatured>
  );
};

export default Featured;
