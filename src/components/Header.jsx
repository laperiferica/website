import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Menu from './Menu';
import Social from './Social';

const StyledHeader = styled.header``;

const Header = ({ title }) => (
  <StyledHeader>
    <Title title={title} />
    <Social size={2} width={250} />
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
