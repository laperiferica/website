import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import meta from '../../data/static/meta';

const StyledSocial = styled.ul`
  display: flex;
  max-width: ${(props) => props.width}px;
  margin: 2rem auto 0;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  font-size: ${(props) => props.size}rem;
  a {
    color: ${(props) => props.color};
    &::after {
      display: none;
    }
  }
`;

const Social = ({ size, color, width }) => (
  <StyledSocial size={size} color={color} width={width}>
    {meta.social.map((x, idx) => (
      <li key={idx}>
        <a
          href={x.url}
          target={'_blank'}
          rel={'noopener noreferrer'}
          aria-label={x.title}
        >
          {x.icon}
        </a>
      </li>
    ))}
  </StyledSocial>
);

Social.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
};

Social.defaultProps = {
  size: 1,
  color: 'black',
  width: 400,
};

export default Social;
