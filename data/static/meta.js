import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default {
  email: 'info.laperiferica@gmail.com',
  social: [
    {
      url: 'https://www.youtube.com/channel/UCo0LamWRwdLSfO3o_Ob3-WQ',
      icon: <FaYoutube size={54} />,
      title: 'Youtube',
    },
    {
      url: 'https://twitter.com/LaPerifericaCC',
      icon: <FaTwitter size={54} />,
      title: 'Twitter',
    },
    {
      url: 'https://www.instagram.com/LaPerifericaCC/',
      icon: <FaInstagram size={54} />,
      title: 'Instagram',
    },
    {
      url: 'https://www.facebook.com/LaPerifericaCC/',
      icon: <FaFacebook size={54} />,
      title: 'Facebook',
    },
  ],
};
