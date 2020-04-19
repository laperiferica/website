import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

const StyledTags = styled.div``;

const Tags = ({ items, intl }) =>
  items && (
    <StyledTags>
      {intl.formatMessage({ id: 'Tags' })}:{' '}
      {items
        .map((x, idx) => (
          <Link key={idx} to={`/posts/tags/${x}`}>
            {x}
          </Link>
        ))
        .reduce(
          (acc, cur, idx) =>
            [...acc, cur].concat(
              idx < items.length - 1 ? [<span key={-idx - 1}>, </span>] : []
            ),
          []
        )}
    </StyledTags>
  );

Tags.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  items: PropTypes.array,
};

export default injectIntl(Tags);

