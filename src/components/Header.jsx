import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Menu from './Menu';

const StyledHeader = styled.header``;

const Header = ({ title }) => (
  <StyledHeader>
    <Title title={title} />
    <Menu />
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
