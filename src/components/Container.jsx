import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Container = ({ children, id }) => (
  <StyledContainer id={id}>{children}</StyledContainer>
);

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
