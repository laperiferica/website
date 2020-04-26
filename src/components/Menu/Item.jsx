import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';

const StyledItem = styled.div`
  a {
    color: var(--text-color);
    position: relative;
    display: inline-block;
    padding: 0.5rem 0.5rem;
    margin: 0 0.5rem;
    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 2px;
      margin-top: -1px;
      z-index: 1;
      background-color: #ff00ff;
      transform: scaleX(0);
      transition: all 0.2s;
      visibility: hidden;
    }
    &:hover,
    &:active,
    &.active {
      outline: 0;
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

const Item = ({ title, to, onClick }) => (
  <StyledItem>
    <Link to={to} activeClassName={'active'} onClick={onClick}>
      <FormattedMessage id={title} />
    </Link>
  </StyledItem>
);

Item.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Item;
