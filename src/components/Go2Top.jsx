import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const StyledGo2Top = styled.a`
  line-height: 3rem;
  display: none;
  position: fixed;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  background-color: var(--text-color);
  padding: 12px 8px 8px 8px;
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 16px;
  z-index: 1100;
  text-decoration: none;
  border-radius: 50%;

  &:hover {
    color: white;
  }
`;

const fn = () => {
  const el = document.querySelector('.go2top');
  if (el.style.display === 'block') {
    if (window.scrollY < 200) {
      el.style.display = 'none';
    }
  } else {
    if (window.scrollY > 200) {
      el.style.display = 'block';
    }
  }
};

const Go2Top = () => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    fn();
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
  const go2top = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <StyledGo2Top tabIndex={0} onClick={() => go2top()} className={'go2top'}>
      <FaChevronUp size={'25px'} />
    </StyledGo2Top>
  );
};

export default Go2Top;
