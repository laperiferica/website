import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const StyledTitle = styled.div`
  height: 350px;
  display: grid;
  justify-content: center;
  align-content: center;
  a {
    &::after {
      display: none;
    }
    text-decoration: none;
    img {
      margin-bottom: 0;
      width: 280px;
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
