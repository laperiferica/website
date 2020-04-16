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
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
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
    bottom: -1rem;
    right: 0.5rem;
    background: rgba(255, 255, 255, 1);
    padding: 0.7rem 1rem 1.5rem;
    box-shadow: 0 -0.2rem 0.2rem rgba(0, 0, 0, 0.2);
    a {
      text-transform: uppercase;
      color: var(--primary-color);
      text-decoration: none;
      font-size: 1.4rem;
    }

    small {
      text-align: right;
      display: block;
      color: gray;
    }
  }
`;

const Item = ({ uri, image, title, date }) => (
  <StyledItem>
    <div className={'image'}>
      <Link to={uri}>
        <GatsbyImage
          objectFit={'cover'}
          objectPosition={'100% 0'}
          width={'100%'}
          height={'100%'}
          maxHeight={'25rem'}
          fixed={image}
          alt={title}
        />
      </Link>
    </div>
    <div className={'title'}>
      <Link to={uri}>{title}</Link>
      {date && <small>{date}</small>}
    </div>
  </StyledItem>
);

Item.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Item;
