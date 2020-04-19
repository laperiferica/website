import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { changeLocale, injectIntl } from 'gatsby-plugin-intl';

const StyledLangs = styled.div`
  margin: 0.5rem 0;
  a {
    cursor: pointer;
  }
`;

const Langs = ({ intl }) => (
  <StyledLangs>
    {intl.locale === 'en' ? (
      <a onClick={() => changeLocale('es')}>Español</a>
    ) : (
      <a onClick={() => changeLocale('en')}>English</a>
    )}
  </StyledLangs>
);

Langs.propTypes = {
  intl: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default injectIntl(Langs);
