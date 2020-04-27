import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledPersons = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > li {
    padding: 1.5rem;
  }
`;

const Persons = ({ items }) => (
  <StyledPersons>
    {items.map((x, idx) => (
      <Item key={idx} {...x} />
    ))}
  </StyledPersons>
);

Persons.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string,
      image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      tasks: PropTypes.array,
      email: PropTypes.string,
    })
  ),
};

export default Persons;
