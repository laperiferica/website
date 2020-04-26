import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby-plugin-intl';

const StyledItem = styled.div`
  position: relative;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  overflow: hidden;

  .gatsby-image-wrapper {
    display: block !important;
  }
  .gatsby-image-wrapper,
  img {
    margin-bottom: 0;
  }

  .image {
    transition: all 0.3s;
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.7rem;
    box-shadow: 0 -0.2rem 0.2rem rgba(0, 0, 0, 0.2);
    text-transform: uppercase;

    small {
      text-align: right;
      display: block;
      color: gray;
    }
  }

  a:hover {
    color: white;
    .image {
      transform: scale(1.2);
    }
  }
`;

const Item = ({ uri, image, title, date }) => (
  <StyledItem>
    <Link to={uri}>
      <div className={'image'}>
        <GatsbyImage fixed={image} alt={title} />
      </div>
      <div className={'title'}>
        {title}
        {date && <small>{date}</small>}
      </div>
    </Link>
  </StyledItem>
);

Item.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Item;
