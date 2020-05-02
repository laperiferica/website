import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import meta from '../../data/static/meta';
import image from '../images/team.jpg';

const StyledContactPage = styled.div`
  .info {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    grid-gap: 1rem;
    max-width: 427px;
    margin: 0 auto;
    font-size: 1.2rem;
    .left {
      font-weight: bold;
    }
    .separator {
      width: 2px;
      height: 100%;
      background-color: black;
    }
  }
  .image {
    margin-top: 2rem;
    position: relative;
    img {
      width: 100%;
    }

    .box {
      position: absolute;
      padding: 0.2rem 0.3rem;
      background-color: var(--marked-yellow-color);
      a {
        color: black;
        &.weight-normal {
          font-weight: normal;
        }
      }
    }
  }
`;

const teamPositions = {
  alberto: { pos: ['51%', '3%'], align: 'left' },
  irene: { pos: ['9%', '68%'], align: 'right' },
  jose: { pos: ['80%', '29%'], align: 'left' },
  maca: { pos: ['-10%', '41%'], align: 'right' },
  mimar: { pos: ['39%', '74%'], align: 'left' },
};

const ContactPage = ({ intl, data }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Contact' })} />
    <StyledContactPage>
      <Section id={'email'} title={intl.formatMessage({ id: 'Contact' })}>
        <div className={'info'}>
          <div className={'left'}>
            Puedes escribirnos a:
            <br />
            <br />
            ¡O puedes contactar
            <br />
            con cada uno de
            <br />
            nosotros!
          </div>
          <div className={'separator'} />
          <div>
            <a
              href={`mailto:${meta.email}`}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              {meta.email}
            </a>
          </div>
        </div>
        <div className={'image'}>
          <img src={image} alt={'Foto del equipo'} />
          {data.team.edges.map((x, idx) => {
            const { pos, align } = teamPositions[x.node.frontmatter.slug];
            return (
              <div
                className={'box'}
                key={idx}
                style={{ left: pos[0], top: pos[1], textAlign: align }}
              >
                <Link to={`/who/team/${x.node.frontmatter.slug}`}>
                  <strong>{x.node.frontmatter.name}</strong>
                </Link>
                <br />
                <a
                  href={`mailto:${x.node.frontmatter.email}`}
                  className={'weight-normal'}
                >
                  {x.node.frontmatter.email}
                </a>
              </div>
            );
          })}
        </div>
      </Section>
    </StyledContactPage>
  </Layout>
);

ContactPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    team: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              slug: PropTypes.string,
              email: PropTypes.string,
              name: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};

export default injectIntl(ContactPage);

export const pageQuery = graphql`
  query($language: String) {
    team: allMarkdownRemark(
      filter: {
        fileInfo: { sourceInstanceName: { eq: "team" } }
        frontmatter: { lang: { eq: $language } }
      }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            name
            email
          }
        }
      }
    }
  }
`;
