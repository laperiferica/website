import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import BiLink from '../BiLink';

const StyledItem = styled.li`
  max-width: 200px;
  text-align: center;
  a {
    color: white;
    width: 190px;
    .gatsby-image-wrapper {
      border-radius: 50%;
      filter: grayscale(100%);
      transition: 0.3s filter;
    }
    &:hover {
      .gatsby-image-wrapper {
        filter: none;
      }
    }

    h3 {
      position: relative;
      display: inline-block;
      padding: 0 0.4rem 0.1rem;
      font-weight: 700;
      z-index: 1;
      &::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 49%,
          #b902bf 50%,
          #b902bf 100%
        );
      }
    }
  }

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    > li {
      color: white;
      padding: 0;
      margin: 0;
    }
  }
`;

const Item = ({ uri, image, name, tasks }) => (
  <StyledItem>
    <BiLink url={uri}>
      <GatsbyImage fixed={image} alt={`Foto de ${name}`} />
      <h3>{name}</h3>
    </BiLink>
    {tasks && (
      <ul>
        {tasks.map((x, idx) => (
          <li key={idx}>{x}</li>
        ))}
      </ul>
    )}
  </StyledItem>
);

Item.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

export default Item;
