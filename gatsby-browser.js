/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/normalize.css';

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Object} location -
 * @param {Number} [mainNavHeight] - the height of any persistent nav -> document.querySelector(`nav`)
 */
function scrollToAnchor(location) {
  if (location && location.hash) {
    // NOTE: 기존의 location.hash를 디코딩하여 사용함
    const decodedHash = decodeURI(location.hash);
    const item = document.querySelector(`${decodedHash}`);
    // NOTE: item이 없을 때 스크롤하지 않음
    if (!item) {
      return;
    }
    item.scrollIntoView();
  }

  return true;
}

export const onRouteUpdate = ({ location }) => scrollToAnchor(location);

export const shouldUpdateScroll = () => {
  window.scrollTo(0, 0);
  return false;
};
