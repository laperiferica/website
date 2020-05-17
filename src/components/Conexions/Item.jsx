import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import BiLink from '../BiLink';

const StyledItem = styled.li`
  box-sizing: content-box;
  max-width: 100px;
  text-align: center;
  a {
    .container {
      border-radius: 50%;
      overflow: hidden;
      .image {
        height: 100px;
        transition: all 0.3s;
      }
      margin-bottom: 1rem;
    }
    color: black;
    .gatsby-image-wrapper {
      border-radius: 50%;
      margin: 0;
    }
  }
  a {
    &:hover {
      .image {
        transform: scale(1.1);
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin-bottom: 0rem;
    }
  }
`;

const Item = ({ url, image, name, tags }) => (
  <StyledItem>
    <BiLink url={url}>
      <div className={'container'}>
        <div className={'image'}>
          <GatsbyImage fixed={image} alt={`Imágen de ${name}`} />
        </div>
      </div>
      <h4>{name}</h4>
    </BiLink>
    {tags && (
      <ul>
        {tags.map((x, idx) => (
          <li key={idx}>#{x}</li>
        ))}
      </ul>
    )}
  </StyledItem>
);

Item.propTypes = {
  url: PropTypes.string,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

export default Item;
