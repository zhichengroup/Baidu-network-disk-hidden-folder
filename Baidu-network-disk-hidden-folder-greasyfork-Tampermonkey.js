// ==UserScript==
// @name         百度网盘网页版隐藏“我的卡包”和“我的应用数据”
// @namespace    https://zhichengroup.github.io
// @version      0.1.22 beta
// @description  百度网盘网页版隐藏“我的卡包”和“我的应用数据” 2018-09-02 可用
// @author       zhichengroup
// @match        *://pan.baidu.com/*

// ==/UserScript==

(function () {
  'use strict';
  
    var paras = document.getElementsByTagName("dd");
    for(var i=1;i<10;i++){
        if(paras[i].children[2].children[0].children[0].title=="我的卡包"||paras[i].children[2].children[0].children[0].title=="我的应用数据")
        {
            paras[i].style.display="none";
            
        }
    }
    
})();
