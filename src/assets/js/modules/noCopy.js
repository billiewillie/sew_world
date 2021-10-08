const noCopy = () => {
  function killCopy(e) {
    return false;
  }

  function reEnable() {
    return true;
  }

  document.onselectstart = new Function("return false");

  if (window.sidebar) {
    document.onmousedown = killCopy;
    document.onclick = reEnable;
  }

  window.addEventListener("mousedown", (e) => {
    if (e.which === 2) e.preventDefault();
  });
};

export default noCopy;
