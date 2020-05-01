import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

import BiLink from '../BiLink';

const StyledItem = styled.li`
  box-sizing: content-box;
  max-width: 100px;
  text-align: center;
  a {
    .gatsby-image-wrapper {
      border-radius: 50%;
    }
  }
`;

const Item = ({ url, image, name }) => (
  <StyledItem>
    <BiLink url={url}>
      <GatsbyImage fixed={image} alt={`Imágen de ${name}`} />
      <h4>{name}</h4>
    </BiLink>
  </StyledItem>
);

Item.propTypes = {
  url: PropTypes.string,
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
