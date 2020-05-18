import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Conexions from '../components/Conexions';
import Map from '../components/Map';
import MarkerHeading from '../components/MarkedHeading';

const ConexionsPage = ({ intl, data }) => {
  const [type, setType] = useState('friend');
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'Conexions' })} />
      <Section id={'conexions'} title={intl.formatMessage({ id: 'Conexions' })}>
        <p
          style={{
            marginTop: '-2rem',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          En esta sección resaltamos diferentes artístas y colectivos a nivel
          glocal que "nos encantan" (compartimos valores y nos gusta lo que
          hacen), personas y entidades con las que hemos creado redes de
          colabaración en diversos proyectos y organizaciones a las que nos
          hemos asociado como miembros.
        </p>
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
      <p
        style={{
          textAlign: 'center',
          marginTop: '-2.5rem',
          marginBottom: '3.5rem',
        }}
      >
        En este espacio queremos dar visibilidad a diversos proyectos de Almería
        con los que sentimos que tenemos una visión común a la hora de entender
        la cultura.
      </p>

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
