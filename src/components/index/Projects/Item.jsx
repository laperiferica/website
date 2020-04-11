import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';

const StyledItem = styled.div`
  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    > li {
      padding: 0;
    }
  }
`;

const Item = ({ image, title, content }) => (
  <StyledItem>
    <GatsbyImage fluid={image.childImageSharp.fluid} alt={title} />
    <h3>{title}</h3>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledItem>
);

Item.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.node,
};

export default Item;
