import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Menu from './Menu';

const StyledHeader = styled.header``;

const Header = ({ title, small }) => (
  <StyledHeader>
    <Title title={title} small={small} />
    <Menu />
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
  small: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  small: false,
};

export default Header;
