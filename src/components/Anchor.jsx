import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
`;

const Anchor = ({ id }) => <StyledAnchor id={id} />;

Anchor.propTypes = {
  id: PropTypes.string,
};

export default Anchor;
