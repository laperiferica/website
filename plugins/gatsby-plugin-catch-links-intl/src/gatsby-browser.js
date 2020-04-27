import { navigate } from 'gatsby-plugin-intl';

import catchLinks from './catch-links';

exports.onClientEntry = (_, pluginOptions = {}) => {
  catchLinks(window, pluginOptions, (href) => {
    navigate(href);
  });
};
