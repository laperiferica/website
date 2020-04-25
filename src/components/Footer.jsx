import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Langs from './Langs';

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
  padding: 1.5rem 0;
  background: black;
  color: white;
  text-transform: uppercase;
  text-align: center;
  a {
    text-transform: lowercase;
    color: white;
  }
`;

const Footer = ({ title }) => (
  <StyledFooter>
    {title} · Cultura contemporánea {new Date().getFullYear()}
    <Langs />
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
