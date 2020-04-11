import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const data = {
  email: 'info.laperiferica@gmail.com',
  social: [
    {
      url: 'https://www.youtube.com/channel/UCo0LamWRwdLSfO3o_Ob3-WQ',
      icon: <FaYoutube size={54} />,
    },
    {
      url: 'https://twitter.com/LaPerifericaCC',
      icon: <FaTwitter size={54} />,
    },
    {
      url: 'https://www.instagram.com/LaPerifericaCC/',
      icon: <FaInstagram size={54} />,
    },
    {
      url: 'https://www.facebook.com/LaPerifericaCC/',
      icon: <FaFacebook size={54} />,
    },
  ],
};

const StyledContact = styled.section`
  margin: 1rem 0;
  text-align: center;
  ul {
    display: flex;
    max-width: 400px;
    margin: 2rem auto 0;
    justify-content: space-between;
  }
`;

const Contact = () => (
  <Container id={'contacta'}>
    <StyledContact>
      <h2>Contacta</h2>
      <a href={`mailto:${data.email}`}>{data.email}</a>
      <ul>
        {data.social.map((x, idx) => (
          <a
            key={idx}
            href={x.url}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            {x.icon}
          </a>
        ))}
      </ul>
    </StyledContact>
  </Container>
);

export default Contact;
