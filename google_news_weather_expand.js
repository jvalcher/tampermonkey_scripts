// ==UserScript==
// @name         Google News Weather Expand
// @namespace    http://tampermonkey.net/
// @version      2025-11-27
// @description  Expand the Google News weather widget to show forecast
// @author       You
// @match        https://news.google.com/home*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

const title = "Tampermonkey -- Google News Weather Expand";

window.addEventListener("load", (event) => {
  const timer = setInterval(() => {
      const el = document.querySelector('[aria-label="Expand to view forecast"]');
      if (el) {
          el.click();
          console.log(`${title}: expanded`);
          clearInterval(timer);
      }
  }, 1000);
});

})();
