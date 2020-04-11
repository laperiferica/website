import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Container from './Container';

const StyledFooter = styled.footer`
  margin: 0;
  padding: 1.5rem 0;
  background: black;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

const Footer = ({ title }) => (
  <StyledFooter>
    <Container>
      {title} · Cultura contemporánea {new Date().getFullYear()}
    </Container>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string
};

Footer.defaultProps = {
  title: ''
};

export default Footer;
