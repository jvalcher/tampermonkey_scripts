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

    const upPageKey = 'k';
    const downPageKey = 'j';

    window.addEventListener("load", () => {
        window.addEventListener("keydown", (e) => {

            if (e.key === downPageKey) {
                e.preventDefault();
                e.stopPropagation();
                //log(`\'${prevPageKey}\' pressed`);

                const downArrow = new KeyboardEvent("keydown", {
                    key: "ArrowDown",
                    code: "ArrowDown",
                    keyCode: 40,
                    which: 40,
                    bubbles: true,
                    cancelable: true,
                    composed: true
                });
                (document.activeElement || document).dispatchEvent(downArrow);
            }

            else if (e.key === upPageKey) {
                e.preventDefault();
                e.stopPropagation();
                //log(`\'${nextPageKey}\' pressed`);

                const upArrow = new KeyboardEvent("keydown", {
                    key: "ArrowUp",
                    code: "ArrowUp",
                    keyCode: 38,
                    which: 38,
                    bubbles: true,
                    cancelable: true,
                    composed: true
                });
                (document.activeElement || document).dispatchEvent(upArrow);
            }
        });

        log("script loaded");
    });

}());
