import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const StyledMember = styled.div`
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    > li {
      padding: 0;
    }
  }
`;

const Member = ({ image, name, tasks }) => (
  <StyledMember>
    <GatsbyImage fixed={image.childImageSharp.fixed} alt={`Foto de ${name}`} />
    <h3>{name}</h3>
    <ul>
      {tasks.map((x, idx) => (
        <li key={idx}>{x}</li>
      ))}
    </ul>
  </StyledMember>
);

Member.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  tasks: PropTypes.array
};

export default Member;
