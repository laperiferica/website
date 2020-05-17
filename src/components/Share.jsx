import React from 'react';
import styled from 'styled-components';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGetPocket,
  FaWhatsapp,
  FaTelegram,
  FaReddit,
  FaTumblr,
} from 'react-icons/fa';
import {
  FacebookShareButton,
  LinkedinShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { Location } from '@reach/router';

const StyleShare = styled.div`
  @media (max-width: 600px) {
    & {
      text-align: left;
      width: 216px;
    }
  }
  padding-bottom: 1rem;
  margin: 1rem 0 1rem;
  color: var(--primary-color);
  font-size: 1.8rem;
  button {
    margin-right: 1rem;
    &:hover {
      color: black !important;
    }
    &::after {
      display: none;
    }
  }
`;

const Share = () => (
  <StyleShare>
    <Location>
      {({ location: { href } }) => (
        <>
          <FacebookShareButton url={href}>
            <FaFacebook />
          </FacebookShareButton>
          <TwitterShareButton url={href}>
            <FaTwitter />
          </TwitterShareButton>
          <LinkedinShareButton url={href}>
            <FaLinkedin />
          </LinkedinShareButton>
          <PocketShareButton url={href}>
            <FaGetPocket />
          </PocketShareButton>
          <WhatsappShareButton url={href}>
            <FaWhatsapp />
          </WhatsappShareButton>
          <TelegramShareButton url={href}>
            <FaTelegram />
          </TelegramShareButton>
          <RedditShareButton url={href}>
            <FaReddit />
          </RedditShareButton>
          <TumblrShareButton url={href}>
            <FaTumblr />
          </TumblrShareButton>
        </>
      )}
    </Location>
  </StyleShare>
);

export default Share;
