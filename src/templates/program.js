import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Share from '../components/Share';
import SEO from '../components/SEO';
import Grid from '../components/Grid';

const StyledProgramPage = styled.article`
  text-align: justify;
  word-break: break-word;
  max-width: 900px;
  margin: 0 auto;
  .center {
    text-align: center;
  }
  h4.gallery,
  h4.share {
    margin-top: 3rem;
  }
  .projects {
    margin-top: 2rem;
  }
`;

const ProgramPage = ({
  intl,
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <Container>
      <StyledProgramPage>
        <div className={'center'}>
          <h2>{frontmatter.title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <h4 className={'share'}>
          {intl.formatMessage({ id: 'Share on your social networks' })}
        </h4>
        <Share />

        {(frontmatter.projects && frontmatter.projects.length) > 0 && (
          <div className={'projects'}>
            <h2>{intl.formatMessage({ id: 'Related Projects' })}</h2>
            <Grid
              align={'left'}
              items={frontmatter.projects.map((x) => ({
                uri: `/projects/${x.frontmatter.slug}`,
                title: x.frontmatter.title,
                image: x.frontmatter.image.childImageSharp.fixed,
              }))}
            />
          </div>
        )}
      </StyledProgramPage>
    </Container>
  </Layout>
);

ProgramPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        projects: PropTypes.arrayOf(
          PropTypes.shape({
            frontmatter: PropTypes.shape({
              slug: PropTypes.string,
              title: PropTypes.string,
              image: PropTypes.object,
            }),
          })
        ),
      }),
      html: PropTypes.string,
    }),
  }),
};

export default injectIntl(ProgramPage);

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileInfo: { sourceInstanceName: { eq: "programs" } }
    ) {
      frontmatter {
        title
        projects {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                fixed(quality: 95, width: 300, height: 250) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
      html
    }
  }
`;
