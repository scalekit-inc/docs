export default function () {
  return {
    onRouteUpdate({ location }) {
      if (
        location.search.includes('_gl=') ||
        location.search.includes('_ga=') ||
        location.search.includes('_gcl_au=')
      ) {
        const cleanUrl = location.pathname + location.hash;
        window.history.replaceState({}, '', cleanUrl);
      }
    },
  };
}
