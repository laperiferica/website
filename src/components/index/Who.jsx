import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

const StyledWho = styled.section`
  margin: 1rem 0;
  text-align: center;
  p {
    text-align: center;
  }
`;

const Who = () => (
  <Container id={'quienes-somos'}>
    <StyledWho>
      <h2>Quienes somos</h2>
      <p>
        LA PERIFÉRICA - Cultura Contemporánea es un Colectivo de Gestorxs
        Culturales almerienses que busca poner en valor la vida cultural de la
        ciudad y de la provincia desde una visión innovadora, apoyando y
        fomentando el talento local, el intercambio y la cooperación
        internacional y sobre todo la implicación y participación ciudadana a
        través de proyectos artísticos y culturales que promuevan la reflexión
        de los retos y temas contemporáneos.
        <br />
        Uno de nuestros ámbitos de trabajo son los proyectos internacionales
        como los que realizamos a través del programa europeo Erasmus +.
      </p>
    </StyledWho>
  </Container>
);

export default Who;
