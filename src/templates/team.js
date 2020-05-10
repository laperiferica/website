import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';

const StyleArticle = styled.article`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 200px,
    black 201px,
    black 100%
  );
  color: white;
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      z-index: 3;
      border-bottom: 2px solid #f8f82c;
      padding: 0 1rem 0.2rem;
    }
    .gatsby-image-wrapper {
      border-radius: 50%;
      filter: grayscale(100%);
    }
  }
`;

const TeamPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.name} />
    <StyleArticle>
      <Container>
        <div className={'heading'}>
          <GatsbyImage fixed={frontmatter.image.childImageSharp.fixed} />
          <h2>{frontmatter.name}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
      <div style={{ marginBottom: '-3rem' }} />
    </StyleArticle>
  </Layout>
);

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object,
        name: PropTypes.string,
        social: PropTypes.object,
        tasks: PropTypes.array,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default TeamPage;

export const pageQuery = graphql`
  query($slug: String, $language: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "team" } }
    ) {
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
            fixed(quality: 95, width: 300) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      html
    }
  }
`;
