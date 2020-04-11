import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Anchor from './Anchor';

const StyledSection = styled.section`
  padding: 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;

const Section = ({ children, id, title }) => (
  <StyledSection>
    <Anchor id={id} />
    <h2>{title}</h2>
    {children}
  </StyledSection>
);

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
