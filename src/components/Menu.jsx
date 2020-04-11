import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from './Container';

const links = [
  { title: 'Proyectos', to: '/#proyectos' },
  { title: 'Quienes somos', to: '/#quienes-somos' },
  { title: 'Equipo', to: '/#equipo' },
  { title: 'Contacta', to: '/#contacta' },
];

const StyledMenu = styled.nav`
  text-transform: uppercase;
  font-size: 1.3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  a {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
`;

const Menu = () => (
  <Container>
    <StyledMenu>
      {links.map((x, idx) => (
        <Link key={idx} to={x.to}>
          {x.title}
        </Link>
      ))}
    </StyledMenu>
  </Container>
);

export default Menu;
