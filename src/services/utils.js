export const debounce = (fn, time) => {
  let timed;

  return () => {
    clearTimeout(timed);
    timed = setTimeout(fn, time);
  };
};

export const isScrolledToBottom = offset => {
  return (
    window.scrollY + window.innerHeight >=
    document.documentElement.offsetHeight - offset
  );
};
