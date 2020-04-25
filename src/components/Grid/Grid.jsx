import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledGrid = styled.section`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-gap: 2rem;
  justify-content: ${(props) => props.align};
  justify-items: center;
`;

const Grid = ({ items, align }) => (
  <StyledGrid align={align}>
    {items.map((x, idx) => (
      <div key={idx}>
        <Item {...x} />
      </div>
    ))}
  </StyledGrid>
);

Grid.propTypes = {
  align: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      uri: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
};

Grid.defaultProps = {
  align: 'center',
};

export default Grid;
