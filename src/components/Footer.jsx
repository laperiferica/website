import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Langs from './Langs';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

const StyledFooter = styled.footer`
  margin: auto 0 0 0;
  padding: 1.5rem 0;
  background: black;
  color: white;
  text-align: center;
  a:hover {
    color: white;
  }
  .copy {
    text-transform: uppercase;
  }
  .legal {
    text-transform: none;
    margin-top: 1rem;
  }
  .langs {
    text-transform: none;
  }
`;

const Footer = ({ title }) => (
  <StyledFooter>
    <div className={'copy'}>
      {title} | Cultura Contemporánea {new Date().getFullYear()}
    </div>
    <div className={'legal'}>
      <Link to={'/privacy-policy'}>
        <FormattedMessage id={'Privacy Policy'} />
      </Link>
      {' | '}
      <Link to={'/cookies-policy'}>
        <FormattedMessage id={'Cookies Policy'} />
      </Link>
    </div>
    <div className={'langs'}>
      <Langs />
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: '',
};

export default Footer;
