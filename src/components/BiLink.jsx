import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BiLink = ({ url, children }) =>
  url.startsWith('http') ? (
    <a href={url} target={'_blank'} rel={'noopener noreferrer'}>
      {children}
    </a>
  ) : (
    <Link to={url}>{children}</Link>
  );

BiLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
};

export default BiLink;
