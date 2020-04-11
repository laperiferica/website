import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Link } from 'gatsby';

const StyledItem = styled.div``;

const Item = ({ slug, image, title, content }) => (
  <StyledItem>
    <div className={'image'}>
      <Link to={`/projects/${slug}`}>
        <GatsbyImage fixed={image.childImageSharp.fixed} alt={title} />
      </Link>
    </div>
    <Link to={`/projects/${slug}`}>
      <h3>{title}</h3>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledItem>
);

Item.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.node,
};

export default Item;
