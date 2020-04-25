import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import BiLink from '../BiLink';

const StyledItem = styled.li`
  > a {
    &:hover,
    &:active {
      &::after {
        display: none;
      }
    }
  }
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
  .center {
    text-align: center;
  }
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    > li {
      padding: 0;
    }
  }
`;

const Item = ({ uri, image, name, tasks, email }) => (
  <StyledItem>
    <BiLink url={uri}>
      <GatsbyImage fixed={image} alt={`Foto de ${name}`} />
    </BiLink>
    <BiLink url={uri}>
      <div className={'center'}>
        <h3>{name}</h3>
      </div>
    </BiLink>
    {tasks && (
      <ul>
        {tasks.map((x, idx) => (
          <li key={idx}>{x}</li>
        ))}
      </ul>
    )}
    <p>{email}</p>
  </StyledItem>
);

Item.propTypes = {
  uri: PropTypes.string,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array,
  email: PropTypes.string,
};

export default Item;
