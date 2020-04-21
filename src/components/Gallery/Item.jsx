import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import GatsbyImage from 'gatsby-image';

const StyledItem = styled.div`
  position: relative;
  transition: transform 0.3s;
  ${(props) =>
    props.even
      ? css`
          transform: rotate(3deg) scale(0.8);
        `
      : css`
          transform: rotate(-3deg) scale(0.8);
        `}
  -webkit-backface-visibility: hidden;
  padding: 0.7rem 0.7rem 0;
  text-align: left;
  cursor: pointer;
  .gatsby-image-wrapper {
    display: block !important;
  }
  .gatsby-image-wrapper,
  img {
    margin-bottom: 0;
  }
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  .image {
    a {
      display: block;
      &:hover {
        transform: scale(1.2) rotate(5deg);
      }
    }
  }
  .title {
    padding: 0.7rem 1rem 1.5rem;
    text-align: center;
  }
  &:hover {
    transform: rotate(0deg) scale(1);
  }
`;

const Item = ({ thumbnail, title, even, onClick }) => (
  <StyledItem even={even} onClick={onClick}>
    <div className={'image'}>
      <GatsbyImage
        objectFit={'cover'}
        objectPosition={'100% 0'}
        width={'100%'}
        height={'100%'}
        maxHeight={'25rem'}
        fixed={thumbnail}
        alt={title}
      />
    </div>
    <div className={'title'}>{title}</div>
  </StyledItem>
);

Item.propTypes = {
  thumbnail: PropTypes.object,
  title: PropTypes.string,
  even: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Item;
