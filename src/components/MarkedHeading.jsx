import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMarkedHeading = styled.h2`
  display: inline-block;
  position: relative;
  padding: 0.5rem 0.6rem 0.1rem;
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: linear-gradient(
      to right,
      var(--marked-text-color) 0,
      var(--marked-text-color) 100%
    );
    transform: rotate(0.4deg) skew(-10deg);
  }
`;

const MarkerHeading = ({ children }) => (
  <StyledMarkedHeading>{children}</StyledMarkedHeading>
);

MarkerHeading.propTypes = {
  children: PropTypes.node,
};

export default MarkerHeading;
