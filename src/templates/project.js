import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import Container from '../components/Container';

const StyleArticle = styled.article``;

const ProjectPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <Container>
      <StyleArticle>
        <GatsbyImage
          fixed={frontmatter.image.childImageSharp.fixed}
          alt={frontmatter.title}
        />
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyleArticle>
    </Container>
  </Layout>
);

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object,
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default ProjectPage;

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileInfo: { sourceInstanceName: { eq: "projects" } }
    ) {
      frontmatter {
        slug
        title
        image {
          childImageSharp {
            fluid(quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
            fixed(quality: 95, height: 500) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      html
    }
  }
`;