import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Burger from './Burger';

import menu from '../../../data/static/menu';

const StyledMenu = styled.nav`
  min-height: 72px;
  box-sizing: border-box;
  .menu {
    padding: 1rem;
    width: 100%;
    top: 0;
    z-index: 1;
    background: white;
    text-transform: uppercase;
    font-size: 1.3rem;
    .links {
      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      word-wrap: wrap;
      a {
        // https://css-tricks.com/having-fun-with-link-hover-effects/
        background: linear-gradient(
          to bottom,
          var(--primary-color) 0%,
          var(--primary-color) 100%
        );
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 3px 3px;
        display: inline-block;
        padding: 0.5rem 0.5rem;
        margin: 0 0.5rem;
        text-decoration: none;
        transition: background-size color 0.2s;
        color: var(--text-color);
        &:hover {
          background-position: 0 100%;
          background-size: 3px 40px;
          background-repeat: repeat-x;
          text-decoration: none;
          color: white;
        }
      }
    }
    @media (max-width: ${menu.breakpoint}px) {
      .links {
        display: ${(props) => (props.open ? 'flex' : 'none')};
        flex-direction: column;
        margin-top: 1rem;
      }
    }
  }
`;

const fn = () => {
  const el = document.querySelector('.menu');
  if (el.style.position === 'fixed') {
    if (window.scrollY < 400) {
      el.style.position = 'unset';
      el.style.borderBottom = 'none';
    }
  } else {
    if (window.scrollY > 400) {
      el.style.position = 'fixed';
      el.style.borderBottom = '1px solid lightgrey';
    }
  }
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  });
  return (
    <StyledMenu open={open}>
      <div className={'menu'}>
        <Burger open={open} setOpen={setOpen} />
        <div className={'links'}>
          {menu.items.map((x, idx) => (
            <Link key={idx} to={x.to} onClick={() => setOpen(false)}>
              {x.title}
            </Link>
          ))}
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
