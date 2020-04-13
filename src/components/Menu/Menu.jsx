import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Burger from './Burger';

const links = [
  { title: 'Proyectos', to: '/#proyectos' },
  { title: 'Quienes somos', to: '/#quienes-somos' },
  { title: 'Equipo', to: '/#equipo' },
  { title: 'Contacta', to: '/contact' },
];

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
          var(--mainColor) 0%,
          var(--mainColor) 100%
        );
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 3px 3px;
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        text-decoration: none;
        transition: background-size 0.2s;
        &:hover {
          // background-image: url("data:image/svg+xml;charset=utf8,<svg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='#ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg>");
          background-position: 0 100%;
          background-size: 3px 40px;
          background-repeat: repeat-x;
          text-decoration: none;
        }
      }
    }
    @media (max-width: 734px) {
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
        <div className={`links`}>
          {links.map((x, idx) => (
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
