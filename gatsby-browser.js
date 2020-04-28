import './src/styles/global.scss';

export const shouldUpdateScroll = () => {
  window.scrollTo({ top: 430 });
  return false;
};
