import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Anchor from './Anchor';
import MarkerHeading from './MarkedHeading';

const StyledSection = styled.section`
  padding: 1.5rem;
  max-width: 1024px;
  margin: 0 auto 3rem;
  h2 {
    margin-bottom: 2rem;
  }
`;

const Section = ({ children, id, title }) => (
  <StyledSection>
    <Anchor id={id} />
    {title && (
      <center>
        <MarkerHeading>{title}</MarkerHeading>
      </center>
    )}
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
