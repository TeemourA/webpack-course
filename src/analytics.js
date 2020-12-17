const createAnalytics = () => {
  let counter = 0;
  let isCleared = false;

  const handler = () => (counter += 1);

  document.addEventListener('click', handler);

  return {
    clear() {
      document.removeEventListener('click', handler);
      isCleared = true;
    },
    getClicks() {
      if (isCleared) {
        return "Analytics doesn't work.";
      }

      return counter;
    },
  };
};

window.analytics = createAnalytics();