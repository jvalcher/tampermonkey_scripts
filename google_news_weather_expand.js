// ==UserScript==
// @name         Google News Weather Expand
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Expand the Google News weather widget to show forecast
// @author       You
// @match        https://news.google.com/home*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

    function log(msg) {
        const w = "color: white;";
        const g = "color: green;";
        const y = "color: yellow;";
        const scriptTitle = "[%cTampermonkey%c] %cGoogle News Weather Expand%c";
        console.log(`${scriptTitle}: ${msg}`, g, w, y, w);
    }

    window.addEventListener("load", (event) => {
        const timer = setInterval(() => {
            const el = document.querySelector('[aria-label="Expand to view forecast"]');
            if (el) {
                el.click();
                log("expanded");
                clearInterval(timer);
            }
        }, 500);
    });

})();
