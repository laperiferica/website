import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Share from '../components/Share';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';
import Tags from '../components/Tags';

const StyledPostPage = styled.article`
  text-align: justify;
  max-width: 900px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  h4.gallery,
  h4.share {
    margin-top: 3rem;
  }
  .meta {
    text-align: center;
  }
`;

const PostPage = ({
  intl,
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <Container>
      <StyledPostPage>
        <h2>{frontmatter.title}</h2>

        <div className={'meta'}>
          {intl.formatMessage({ id: 'Published on' })} {frontmatter.date}
        </div>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.gallery && (
          <>
            <h4 className={'gallery'}>
              {intl.formatMessage({ id: 'Media Gallery...' })}
            </h4>
            <Gallery
              items={frontmatter.gallery.map((x) => ({
                title: x.title,
                thumbnail: x.image.thumbnail.fixed,
                full: x.image.full.fixed,
              }))}
            />
          </>
        )}

        <Tags items={frontmatter.tags} />

        <h4 className={'share'}>
          {intl.formatMessage({ id: 'Share on your social networks' })}
        </h4>
        <Share />
      </StyledPostPage>
    </Container>
  </Layout>
);

PostPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object,
        title: PropTypes.string,
        date: PropTypes.string,
        tags: PropTypes.array,
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

export default injectIntl(PostPage);

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileInfo: { sourceInstanceName: { eq: "posts" } }
    ) {
      frontmatter {
        slug
        title
        tags
        gallery {
          title
          image {
            thumbnail: childImageSharp {
              fixed(quality: 95, width: 250, height: 250, fit: INSIDE) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            full: childImageSharp {
              fixed(quality: 95, width: 1280, height: 720, fit: INSIDE) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
        date(formatString: "d/M/YYYY")
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
