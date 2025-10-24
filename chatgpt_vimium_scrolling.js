// ==UserScript==
// @name         ChatGPT Vimium Scrolling
// @version      0.1
// @namespace    http://tampermonkey.net/
// @description  Press escape twice in ChatGPT text box to allow Vimium scrolling
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
