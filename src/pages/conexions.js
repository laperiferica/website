import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Conexions from '../components/Conexions';
import Map from '../components/Map';
import MarkerHeading from '../components/MarkedHeading';

const StyledCentered = styled.div`
  margin: -2rem 0 3rem;
  p {
    text-align: center;
  }
`;

const ConexionsPage = ({ intl, data }) => {
  const [type, setType] = useState('friend');
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'Conexions' })} />
      <Section id={'conexions'} title={intl.formatMessage({ id: 'Conexions' })}>
        <StyledCentered
          dangerouslySetInnerHTML={{ __html: data.mainText.html }}
        />

        <Conexions
          type={type}
          setType={setType}
          items={data.conexions.edges.map((x) => ({
            type: x.node.frontmatter.type,
            name: x.node.frontmatter.name,
            url: x.node.frontmatter.url,
            image: x.node.frontmatter.image.childImageSharp.fixed,
            tags: x.node.frontmatter.tags,
          }))}
        />
      </Section>

      <center>
        <MarkerHeading>Heterotopías Almerienses</MarkerHeading>
      </center>

      <StyledCentered
        dangerouslySetInnerHTML={{ __html: data.secondText.html }}
      />

      <Map
        items={data.conexions.edges.map((x) => ({
          lat: x.node.frontmatter.lat,
          lng: x.node.frontmatter.lng,
          name: x.node.frontmatter.name,
          url: x.node.frontmatter.url,
          image: x.node.frontmatter.image.childImageSharp.fixed,
        }))}
      />
      <div style={{ marginBottom: '-3rem' }} />
    </Layout>
  );
};

ConexionsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    mainText: PropTypes.shape({
      html: PropTypes.string,
    }),
    secondText: PropTypes.shape({
      html: PropTypes.string,
    }),
    conexions: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string,
              name: PropTypes.string,
              url: PropTypes.string,
              image: PropTypes.object,
              lat: PropTypes.number,
              lng: PropTypes.number,
            }),
          }),
        })
      ),
    }),
  }),
};

export default injectIntl(ConexionsPage);

export const pageQuery = graphql`
  query($language: String) {
    mainText: markdownRemark(
      frontmatter: { id: { eq: "conexions/main" }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
    secondText: markdownRemark(
      frontmatter: { id: { eq: "conexions/second" }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
    conexions: allMarkdownRemark(
      filter: { fileInfo: { sourceInstanceName: { eq: "conexions" } } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            type
            name
            url
            lat
            lng
            tags
            image {
              childImageSharp {
                fixed(quality: 95, width: 100, height: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
