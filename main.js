Object.defineProperty(document, 'hasFocus', {
  value: function () {
    return true;
  },
  configurable: true 
});
function makeVisible() {
  document.visibilityState = "visible";
  document.removeEventListener("visibilitychange", makeVisible);
}
document.addEventListener("visibilitychange", makeVisible);
