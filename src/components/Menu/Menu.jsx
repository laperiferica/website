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
        display: inline-block;
        padding: 0.5rem 1rem;
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
      el.style.borderBottom = '2px solid black';
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
