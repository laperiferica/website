import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';
import MarkerHeading from '../components/MarkedHeading';

const StyleArticle = styled.article`
  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      z-index: 3;
      margin-top: -2rem;
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
    <Container>
      <StyleArticle>
        <div className={'heading'}>
          <GatsbyImage fixed={frontmatter.image.childImageSharp.fixed} />
          <MarkerHeading bg={'green'} color={'white'}>
            {frontmatter.name}
          </MarkerHeading>
        </div>
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
