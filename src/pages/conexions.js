import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Conexions from '../components/Conexions';
import Map from '../components/Map';

const ConexionsPage = ({ intl, data }) => {
  const [type, setType] = useState('friend');
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'Conexions' })} />
      <Section id={'friends'} title={intl.formatMessage({ id: 'Conexions' })}>
        <Conexions
          type={type}
          setType={setType}
          items={data.conexions.edges.map((x) => ({
            type: x.node.frontmatter.type,
            name: x.node.frontmatter.name,
            url: x.node.frontmatter.url,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      </Section>
      {type === 'friend' && (
        <Map
          items={data.conexions.edges.map((x) => ({
            lat: x.node.frontmatter.lat,
            lng: x.node.frontmatter.lng,
            name: x.node.frontmatter.name,
            url: x.node.frontmatter.url,
            image: x.node.frontmatter.image.childImageSharp.fixed,
          }))}
        />
      )}
      <div style={{ marginBottom: '-3rem' }} />
    </Layout>
  );
};

ConexionsPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
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
  {
    conexions: allMarkdownRemark(
      filter: { fileInfo: { sourceInstanceName: { eq: "friends" } } }
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
