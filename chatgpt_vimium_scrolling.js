// ==UserScript==
// @name         ChatGPT Vimium Scrolling
// @description  Press escape twice in ChatGPT text box to allow Vimium scrolling
// @author       jvalcher
// @version      0.2
// @namespace    https://github.com/jvalcher/tampermonkey_scripts
// @icon         https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg
// @match        https://chatgpt.com/*
// ==/UserScript==

(function() { 
    "use strict";

    function log(msg) {
        const w = "color: white;";
        const g = "color: green;";
        const y = "color: yellow;";
        const scriptTitle = "[%cTampermonkey%c] %cChatGPT Vimium Scrolling%c";
        console.log(`${scriptTitle}: ${msg}`, g, w, y, w);
    }

    const escapeKey = "Escape";

    window.addEventListener("load", (event) => {
        document.addEventListener("keydown", function(event) {
            if (event.key === escapeKey) {
                //log("escape pressed");
                document.querySelector("article:last-of-type").click();
            }
        });

        log("script loaded");
    });

})();
