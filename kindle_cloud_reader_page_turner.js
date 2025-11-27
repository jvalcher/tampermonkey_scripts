// ==UserScript==
// @name          Kindle Cloud Reader Page Turner
// @description   Navigate Kindle Cloud Reader pages with custom keys
// @author        jvalcher
// @version       0.2
// @namespace     https://github.com/jvalcher/tampermonkey_scripts
// @match         https://read.amazon.com/?asin*
// @exclude       https://read.amazon.com/kindle-library*
// @icon          https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png
// @noframes
// @run-at        document-end
// ==/UserScript==

(function() { 
    "use strict";

    function log(msg) {
        const w = "color: white;";
        const g = "color: green;";
        const y = "color: yellow;";
        const scriptTitle = "[%cTampermonkey%c] %cKindle Cloud Reader Page Turner%c";
        console.log(`${scriptTitle}: ${msg}`, g, w, y, w);
    }

    const prevPageKey = 'j';
    const nextPageKey = 'k';

    window.addEventListener("load", () => {
        window.addEventListener('keydown', (e) => {

            if (e.key === prevPageKey) {
                e.preventDefault();
                e.stopPropagation();
                //log(`\'${prevPageKey}\' pressed`);
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
                //log(`\'${nextPageKey}\' pressed`);
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

        log("script loaded");
    });

}());
