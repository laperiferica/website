import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';
import Filter from './Filter';

const StyledConexions = styled.div`
  .list {
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
  }
`;

const Conexions = ({ type, setType, items }) => (
  <StyledConexions>
    <Filter type={type} setType={setType} />
    <div className={'list'}>
      {items
        .filter((x) => type === x.type)
        .map((x, idx) => (
          <Item key={idx} {...x} />
        ))}
    </div>
  </StyledConexions>
);

Conexions.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
  setType: PropTypes.func,
};

export default Conexions;

