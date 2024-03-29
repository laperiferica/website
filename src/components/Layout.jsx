import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Go2Top from './Go2Top';
import Cookies from './Cookies';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    margin: 3rem 0;
  }
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
      <Cookies />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
