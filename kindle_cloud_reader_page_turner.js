// ==UserScript==
// @name         Kindle Cloud Reader Page Turner
// @description  Navigate Kindle Cloud Reader pages with custom keys
// @author       jvalcher
// @version      0.1
// @namespace    https://github.com/jvalcher/tampermonkey_scripts
// @match        https://read.amazon.com/*?asin=*
// @icon         https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png
// @noframes
// @run-at       document-end
// ==/UserScript==

(function() {

'use strict';

const scriptTitle = "Kindle Cloud Reader Page Turner";
const prevPageKey = 'j';
const nextPageKey = 'k';

window.addEventListener('keydown', (e) => {

  if (e.key === prevPageKey) {
    e.preventDefault();
    e.stopPropagation();
    //console.log(`${scriptTitle}: \'${prevPageKey}\' pressed`);

    const leftArrow = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37,
        which: 37,
        bubbles: true,
        cancelable: true,
        composed: true
    });
    (document.activeElement || document).dispatchEvent(leftArrow);
  }

  else if (e.key === nextPageKey) {
    e.preventDefault();
    e.stopPropagation();
    //console.log(`${scriptTitle}: \'${nextPageKey}\' pressed`);

    const rightArrow = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true,
        cancelable: true,
        composed: true
    });
    (document.activeElement || document).dispatchEvent(rightArrow);
  }
});

console.log(`${scriptTitle}: script loaded`);
}());
