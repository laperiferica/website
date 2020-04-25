import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby-plugin-intl';

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
      &:hover,
      &:active {
        &::after {
          display: none;
        }
      }
    }
  }
  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.7rem;
    box-shadow: 0 -0.2rem 0.2rem rgba(0, 0, 0, 0.2);
    a {
      text-transform: uppercase;
      color: white;
      text-decoration: none;
      font-size: 1.2rem;
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
        <GatsbyImage fixed={image} alt={title} />
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
