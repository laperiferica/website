import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const StyledTitle = styled.div`
  ${(props) =>
    !props.small ? 'height: calc(100vh - 88px);' : 'height: 400px;'}
  background: black;
  display: grid;
  justify-content: center;
  align-content: center;
  a {
    text-decoration: none;
    img {
      margin-bottom: 0;
    }
  }
`;

const Title = ({ title, small }) => (
  <StyledTitle small={small}>
    <Link to={'/'}>
      <img src={logo} alt={title} />
    </Link>
  </StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string,
  small: PropTypes.bool,
};

export default Title;
