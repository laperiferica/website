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
import imageMobile from '../images/team-mobile.jpg';

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
    .full {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }
  @media (max-width: 980px) {
    .info {
      grid-template-columns: 1fr;
      .left,
      .right,
      .full {
        text-align: center;
      }

      .separator {
        display: none;
      }
      .full {
        grid-column-start: 1;
        grid-column-end: 2;
      }
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

  .image-mobile {
    margin-top: 2rem;
    margin-bottom: -2rem;
    img {
      width: 100%;
    }
    display: none;
  }

  .only-mobile {
    display: none;
  }

  @media (max-width: 980px) {
    .image {
      display: none;
    }
    .image-mobile {
      display: block;
    }
    .only-mobile {
      display: inline-block;
    }
  }
`;

const teamMeta = {
  alberto: {
    pos: ['51%', '3%'],
    align: 'left',
    poly:
      '543,609 564,354 562,236 533,203 546,191 582,183 588,172 577,111 591,88 637,87 651,103 662,145 661,159 654,175 704,188 714,216 701,243 708,258 730,322 708,413 708,508 703,538 679,610',
  },
  irene: {
    pos: ['9%', '68%'],
    align: 'right',
    poly:
      '256,609 253,583 225,592 204,510 232,497 229,464 215,443 230,312 275,246 305,232 319,147 355,117 390,139 403,183 423,341 376,610',
  },
  jose: {
    pos: ['80%', '29%'],
    align: 'left',
    poly:
      '741,610 714,492 705,418 729,317 700,241 712,210 735,185 713,159 712,99 749,78 787,95 795,131 798,161 816,175 853,182 888,215 953,318 941,359 879,443 857,452 848,610',
  },
  maca: {
    pos: ['-10%', '41%'],
    align: 'right',
    poly: '230,309 97,307 101,54 283,58 278,244 251,273 234,308',
  },
  mimar: {
    pos: ['39%', '74%'],
    align: 'left',
    poly:
      '514,610 524,535 525,444 516,429 531,387 537,344 550,358 560,336 561,239 535,206 519,200 516,138 501,99 468,92 439,105 436,175 403,206 424,364 374,609',
  },
};

const ContactPage = ({ intl, data }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Contact' })} />
    <StyledContactPage>
      <Section id={'email'} title={intl.formatMessage({ id: 'Contact' })}>
        <div className={'info'}>
          <div className={'left'}>
            {intl.formatMessage({ id: 'You can write us at:' })}
          </div>
          <div className={'separator'} />
          <div className={'right'}>
            <a
              href={`mailto:${meta.email}`}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              {meta.email}
            </a>
          </div>
          <div className={'full'}>
            {intl.formatMessage({ id: 'Or you can contact each of us!' })}{' '}
            <span className={'only-mobile'}>
              {intl.formatMessage({ id: '(Click on our silhouettes)' })}
            </span>
          </div>
        </div>

        <div className={'image'}>
          <img src={image} alt={'Foto del equipo'} />
          {data.team.edges.map((x, idx) => {
            const { pos, align } = teamMeta[x.node.frontmatter.slug];
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
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  {x.node.frontmatter.email}
                </a>
              </div>
            );
          })}
        </div>

        <div className={'image-mobile'}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1024 610"
            preserveAspectRatio="xMinYMin meet"
          >
            <image width="1024" height="610" xlinkHref={imageMobile} />
            {data.team.edges.map((x, idx) => {
              const { poly } = teamMeta[x.node.frontmatter.slug];
              return (
                <g className="member" key={idx}>
                  <a
                    xlinkHref={`mailto:${x.node.frontmatter.email}`}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                  >
                    <polygon
                      points={poly}
                      style={{
                        fill: 'rgba(0,0,0,0)',
                      }}
                    />
                  </a>
                </g>
              );
            })}
          </svg>
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
