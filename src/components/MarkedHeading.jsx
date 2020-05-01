import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMarkedHeading = styled.h2`
  display: inline-block;
  position: relative;
  padding: 0.5rem 0.6rem 0.1rem;
  // TODO Avoid using important
  margin-bottom: 3rem !important;
  color: ${(props) => props.color};
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
      ${(props) => `var(--marked-${props.bg}-color)`} 0,
      ${(props) => `var(--marked-${props.bg}-color)`} 100%
    );
    transform: rotate(0.4deg) skew(-10deg);
  }
`;

const MarkerHeading = ({ children, bg, color }) => (
  <StyledMarkedHeading bg={bg} color={color}>
    {children}
  </StyledMarkedHeading>
);

MarkerHeading.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.oneOf(['yellow', 'green']),
  color: PropTypes.oneOf(['white', 'black']),
};

MarkerHeading.defaultProps = {
  bg: 'yellow',
  color: 'black',
};

export default MarkerHeading;
