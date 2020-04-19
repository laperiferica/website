import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

const StyledNotFoundPage = styled.div`
  margin: 4rem 0 10rem;
`;

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Not Found' })} />
    <StyledNotFoundPage>
      <Section title={intl.formatMessage({ id: 'Not Found' })}>
        <p>{intl.formatMessage({ id: 'not-found-message' })}</p>
        <Link to={'/'}>{intl.formatMessage({ id: 'Go Home' })}</Link>
      </Section>
    </StyledNotFoundPage>
  </Layout>
);

NotFoundPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(NotFoundPage);
