// ==UserScript==
// @name         ChatGPT Vimium Scrolling
// @author       jvalcher
// @version      0.1
// @namespace    https://github.com/jvalcher/tampermonkey_scripts
// @description  Press escape twice in ChatGPT text box to allow Vimium scrolling
// @icon         https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg
// @match        https://chatgpt.com/c/*
// ==/UserScript==

(function() { 'use strict';

const scriptTitle = "ChatGPT Vimium Scrolling";
const escapeKey = "Escape";

document.addEventListener("keydown", function(event) {
    if (event.key === escapeKey) {
        //console.log(`${scriptTitle}: escape pressed`);
        document.querySelector("article:last-of-type").click();
    }
});

console.log(`${scriptTitle}: script loaded`);
})();
