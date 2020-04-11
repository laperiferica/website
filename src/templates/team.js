import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import Container from '../components/Container';

const StyleArticle = styled.article``;

const TeamPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <Container>
      <StyleArticle>
        <GatsbyImage fixed={frontmatter.image.childImageSharp.fixed} />
        <h2>{frontmatter.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyleArticle>
    </Container>
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
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
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
