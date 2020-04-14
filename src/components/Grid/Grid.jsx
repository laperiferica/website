import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledGrid = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(410px, 410px));
  grid-gap: 1.5rem;
  justify-content: center;
  justify-items: center;
`;

const Grid = ({ items }) => (
  <StyledGrid>
    {items.map((x, idx) => (
      <div key={idx}>
        <Item {...x} />
      </div>
    ))}
  </StyledGrid>
);

Grid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
};

export default Grid;
