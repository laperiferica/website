import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import meta from '../../data/static/meta';
import image from '../images/team.jpg';

const StyledContactPage = styled.div`
  img {
    margin: 2rem 0;
    width: 100%;
  }
`;

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Contact' })} />
    <StyledContactPage>
      <Section id={'email'} title={intl.formatMessage({ id: 'Contact' })}>
        <center>
          <a
            href={`mailto:${meta.email}`}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            {meta.email}
          </a>
        </center>
        <img src={image} alt={'Foto del equipo'} />
      </Section>
    </StyledContactPage>
  </Layout>
);

ContactPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(ContactPage);
