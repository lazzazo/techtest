export function disableBackNavigation() {
  window.history.pushState(null, '', window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
}

export function navigateTo(url: string, replaceInsteadOfPush = false, optionalTitle = '') {
  if (replaceInsteadOfPush) {
    window.history.replaceState(null, optionalTitle, url);
  } else {
    window.history.pushState(null, optionalTitle, url);
  }
}
