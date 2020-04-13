import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';

const StyledItem = styled.div`
  position: relative;
  text-align: left;
  .gatsby-image-wrapper {
    display: block !important;
  }
  .gatsby-image-wrapper,
  img {
    margin-bottom: 0;
  }
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  .image {
    overflow: hidden;
    a {
      display: block;
      &:hover {
        transform: scale(1.2) rotate(5deg);
      }
    }
  }
  .title {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.7rem 1rem;
    a {
      text-transform: uppercase;
      color: var(--mainColor);
      text-decoration: none;
      font-size: 1.4rem;
    }
  }
`;

const Item = ({ slug, image, title }) => (
  <StyledItem>
    <div className={'image'}>
      <Link to={`/projects/${slug}`}>
        <GatsbyImage
          objectFit={'cover'}
          objectPosition={'100% 0'}
          width={'100%'}
          height={'100%'}
          maxHeight={'25rem'}
          fixed={image.childImageSharp.fixed}
          alt={title}
        />
      </Link>
    </div>
    <div className={'title'}>
      <Link to={`/projects/${slug}`}>{title}</Link>
    </div>
  </StyledItem>
);

Item.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
};

export default Item;
