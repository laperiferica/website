import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const StyledFilter = styled.div`
  .filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    grid-gap: 2rem;
    justify-content: center;
    margin: 0 0 3rem;
    padding: 0;
    @media (max-width: 830px) {
      & {
        flex-direction: column;
      }
    }
    > div {
      text-transform: uppercase;
      margin: 0;
      a {
        border: 3px dashed black;
        display: block;
        padding: 1rem 1rem;
        cursor: pointer;
        color: black;
        div {
          font-size: 1.4rem;
          font-weight: 900;
          padding: 0 0.2rem;
          position: relative;
          display: inline-block;
          &::before {
            content: ' ';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0,
              rgba(0, 0, 0, 0) 49%,
              #ff79fe 50%,
              #ff79fe 100%
            );
          }
        }
      }
      &.active {
        a {
          div {
            &::before {
              background-image: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0) 49%,
                #f9fe82 50%,
                #f9fe82 100%
              );
            }
          }
        }
      }
    }
  }
`;

const types = [
  { type: 'friend', label: 'Our friends' },
  { type: 'collaborator', label: 'We collaborate with' },
  { type: 'networks', label: 'We belong to' },
];

const Filter = ({ type, setType }) => (
  <StyledFilter>
    <div className={'filters'}>
      {types.map((x, idx) => (
        <div key={idx} className={x.type === type ? 'active' : ''}>
          <a tabIndex={0} onClick={() => setType(x.type)}>
            <div>
              <FormattedMessage id={x.label} />
            </div>
          </a>
        </div>
      ))}
    </div>
  </StyledFilter>
);

Filter.propTypes = {
  type: PropTypes.string,
  setType: PropTypes.func,
};

export default Filter;

