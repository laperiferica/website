import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const StyledTitle = styled.div`
  height: 400px;
  background: black;
  background: linear-gradient(
    0deg,
    rgba(50, 50, 50, 1) 0%,
    rgba(0, 0, 0, 1) 36%,
    rgba(0, 0, 0, 1) 100%
  );
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

const Title = ({ title }) => (
  <StyledTitle>
    <Link to={'/'}>
      <img src={logo} alt={title} />
    </Link>
  </StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
