import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Share from '../components/Share';
import SEO from '../components/SEO';

const StyledProgramPage = styled.article`
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
`;

const ProgramPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <SEO title={frontmatter.title} />
    <Container>
      <StyledProgramPage>
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <h4 className={'share'}>Comparte en tus redes...</h4>
        <Share />
      </StyledProgramPage>
    </Container>
  </Layout>
);

ProgramPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

export default ProgramPage;

export const pageQuery = graphql`
  query($slug: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug } }
      fileInfo: { sourceInstanceName: { eq: "programs" } }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`;
