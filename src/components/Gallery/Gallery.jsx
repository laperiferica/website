import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledGrid = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const Grid = ({ items }) => (
  <StyledGrid>
    {items.map((x, idx) => (
      <div key={idx}>
        <Item {...x} even={!!(idx % 2)} />
      </div>
    ))}
  </StyledGrid>
);

Grid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      title: PropTypes.string,
    })
  ),
};

export default Grid;

