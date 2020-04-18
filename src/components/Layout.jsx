import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Go2Top from './Go2Top';

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

const Layout = ({ children }) => {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Header title={meta.title} />
      <main>{children}</main>
      <Footer title={meta.title} />
      <Go2Top />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
