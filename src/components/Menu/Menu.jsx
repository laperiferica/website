import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Burger from './Burger';
import Item from './Item';

import menu from '../../../data/static/menu';

const StyledMenu = styled.nav`
  min-height: 72px;
  box-sizing: border-box;
  .menu {
    padding: 1rem;
    width: 100%;
    top: 0;
    z-index: 1100;
    background: white;
    text-transform: uppercase;
    font-size: 1.3rem;
    .links {
      display: flex;
      justify-items: center;
      justify-content: center;
      align-items: center;
      word-wrap: wrap;
    }
    @media (max-width: ${menu.breakpoint}px) {
      .links {
        display: ${(props) => (props.open ? 'flex' : 'none')};
        flex-direction: column;
        margin-top: 1rem;
      }
    }

    transition: box-shadow 0.2s;
    &.floating {
      box-shadow: 0 0.3rem 0.2rem rgba(0, 0, 0, 0.1);
      position: fixed;
    }
  }
`;

const fn = (y) => () => {
  const el = document.querySelector('.menu');
  if (el.classList.contains('floating')) {
    if (window.scrollY < y) {
      el.classList.remove('floating');
    }
  } else {
    if (window.scrollY > y) {
      el.classList.add('floating');
    }
  }
};

const Menu = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const scrollFn = fn(ref.current.offsetTop);
    window.addEventListener('scroll', scrollFn);
    scrollFn();
    return () => {
      window.removeEventListener('scroll', scrollFn);
    };
  });
  return (
    <StyledMenu open={open} ref={ref}>
      <div className={'menu'}>
        <Burger open={open} setOpen={setOpen} />
        <div className={'links'}>
          {menu.items.map((x, idx) => (
            <Item
              key={idx}
              {...x}
              activeClassName={'active'}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default Menu;
