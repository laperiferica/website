import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Social from './Social';

import meta from '../../data/static/meta';

const StyledFooter = styled.footer`
  margin: 0;
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
    <p>
      <a
        href={`mailto:${meta.email}`}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {meta.email}
      </a>
    </p>
    <p>
      <Social size={2} color={'white'} />
    </p>
    <p>
      {title} · Cultura contemporánea {new Date().getFullYear()}
    </p>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
