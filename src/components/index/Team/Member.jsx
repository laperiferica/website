import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';

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

const Member = ({ slug, image, name, tasks }) => (
  <StyledMember>
    <Link to={`/team/${slug}`}>
      <GatsbyImage
        fixed={image.childImageSharp.fixed}
        alt={`Foto de ${name}`}
      />
    </Link>
    <Link to={`/team/${slug}`}>
      <h3>{name}</h3>
    </Link>
    <ul>
      {tasks.map((x, idx) => (
        <li key={idx}>{x}</li>
      ))}
    </ul>
  </StyledMember>
);

Member.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.object,
  name: PropTypes.string,
  tasks: PropTypes.array,
};

export default Member;
