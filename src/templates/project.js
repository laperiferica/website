import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Share from '../components/Share';
import Gallery from '../components/Gallery';
import SEO from '../components/SEO';
import MarkerHeading from '../components/MarkedHeading';

const StyledProjectPage = styled.article`
  max-width: 900px;
  margin: 0 auto;
  h4.gallery,
  h4.share {
    margin-top: 3rem;
  }
  .programs {
    text-align: center;
  }
`;

const ProjectPage = ({
  intl,
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <Container>
      <StyledProjectPage>
        <center>
          <MarkerHeading>{frontmatter.title}</MarkerHeading>
        </center>

        {frontmatter.programs && frontmatter.programs.length > 0 && (
          <div className={'programs'}>
            {intl.formatMessage({ id: 'Inside of the program:' })}{' '}
            {frontmatter.programs.map((x, idx) => (
              <Link key={idx} to={`/programs/${x.frontmatter.slug}`}>
                {x.frontmatter.title}
              </Link>
            ))}
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.gallery && (
          <Gallery
            items={frontmatter.gallery.map((x) => ({
              title: x.title,
              thumbnail: x.image.thumbnail.fixed,
              full: x.image.full.fluid,
            }))}
          />
        )}

        <h4 className={'share'}>
          {intl.formatMessage({ id: 'Share on your social networks' })}
        </h4>
        <Share />
      </StyledProjectPage>
    </Container>
  </Layout>
);

ProjectPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        programs: PropTypes.arrayOf(
          PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.srtring,
          })
        ),
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

export default injectIntl(ProjectPage);

export const pageQuery = graphql`
  query($slug: String, $language: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "projects" } }
    ) {
      frontmatter {
        slug
        title
        programs {
          frontmatter {
            slug
            title
          }
        }
        gallery {
          title
          image {
            thumbnail: childImageSharp {
              fixed(quality: 95, width: 250, height: 250) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            full: childImageSharp {
              fluid(quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      html
    }
  }
`;
