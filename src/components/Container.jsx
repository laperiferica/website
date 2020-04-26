import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 1.5rem;
  max-width: 1024px;
  margin: 0 auto;
  text-align: justify;
`;

const Container = ({ children, id }) => (
  <StyledContainer id={id}>{children}</StyledContainer>
);

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
