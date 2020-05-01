import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledTeam = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 100px,
    black 101px,
    black 100%
  );
  margin: 2rem 0 -3rem 0;
  padding: 0 0 2rem;

  > ul {
    max-width: 1024px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    > li {
      padding: 1.5rem;
    }
  }
`;

const Team = ({ items }) => (
  <StyledTeam>
    <ul>
      {items.map((x, idx) => (
        <Item key={idx} {...x} />
      ))}
    </ul>
  </StyledTeam>
);

Team.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string,
      image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      tasks: PropTypes.array,
    })
  ),
};

export default Team;
