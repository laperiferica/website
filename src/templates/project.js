import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Share from '../components/Share';
import Gallery from '../components/Gallery';

const StyledProjectPage = styled.article`
  text-align: justify;
  max-width: 900px;
  margin: 0 auto;
  h4.gallery,
  h4.share {
    margin-top: 3rem;
  }
`;

const ProjectPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <Container>
      <StyledProjectPage>
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.gallery && (
          <>
            <h4 className={'gallery'}>Galería de medios...</h4>
            <Gallery
              items={frontmatter.gallery.map((x) => ({
                title: x.title,
                image: x.image.childImageSharp.fixed,
              }))}
            />
          </>
        )}

        <h4 className={'share'}>Comparte en tus redes...</h4>
        <Share />
      </StyledProjectPage>
    </Container>
  </Layout>
);

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        gallery: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.object,
          })
        ),
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
        gallery {
          title
          image {
            childImageSharp {
              fixed(quality: 95, width: 250, height: 250, fit: INSIDE) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
      html
    }
  }
`;
