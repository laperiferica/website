import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Burger from './Burger';

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
      a {
        display: inline-block;
        padding: 0.5rem 0.5rem;
        margin: 0 0.5rem;
        text-decoration: none;
      }
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

const fn = () => {
  const el = document.querySelector('.menu');
  if (el.classList.contains('floating')) {
    if (window.scrollY < 470) {
      el.classList.remove('floating');
    }
  } else {
    if (window.scrollY > 470) {
      el.classList.add('floating');
    }
  }
};

const Menu = ({ intl }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', fn);
    fn();
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
            <Link
              key={idx}
              to={x.to}
              activeClassName={'active'}
              onClick={() => setOpen(false)}
            >
              {intl.formatMessage({ id: x.title })}
            </Link>
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

export default injectIntl(Menu);
