// Babel chokes on `export * from './src/router';`
export {getURL, toURLString, parseQueryString, match,
        getLocation, parseRoute, createRoute, createRoutes, formatURL} from './src/router';
export {createApp} from './src/spasm';

function getLink(el) {
  if (!el) {
    return null;
  }

  if (el.tagName === 'A') {
    return el;
  }

  return getLink(el.parentNode);
}

export function monitorLinks(app) {
  return e => {
    const href = (getLink(e.target) || {}).href;

    if (href && e.which === 1 && !e.ctrlKey && !e.metaKey && app.getLocation(href).page) {
      e.preventDefault();
      app.gotoURL(href);
    }
  };
}
