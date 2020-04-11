import React from 'react';
import styled from 'styled-components';

import meta from '../../../data/static/meta';

const StyledContact = styled.section`
  margin: 1rem 0;
  text-align: center;
  > ul {
    display: flex;
    max-width: 400px;
    margin: 2rem auto 0;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;

const Contact = () => (
  <StyledContact>
    <a
      href={`mailto:${meta.email}`}
      target={'_blank'}
      rel={'noopener noreferrer'}
    >
      {meta.email}
    </a>
    <ul>
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
    </ul>
  </StyledContact>
);

export default Contact;
