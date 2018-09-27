// ==UserScript==
// @name         百度网盘网页版隐藏“我的卡包”和“我的应用数据”
// @namespace    https://github.com/zhichengroup/Baidu-network-disk-hidden-folder
// @version      0.9.0 beta
// @description  百度网盘网页版隐藏“我的卡包”和“我的应用数据” 2018-09-27 更新
// @author       zhichengroup
// @match        *://pan.baidu.com/*
// @include      *://pan.baidu.com/*
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @update       2018.09.27-v0.9.0 beta 代码重写。返回上一级、按文件名、大小、日期排序时存在bug，解决方案：在顶栏晃一晃鼠标就没有了。

// ==/UserScript==

(function () {
    'use strict';

    $(document).ready(function(){

        function clearfunc(){
            $("[title='我的卡包']").parent().parent().parent().hide(); // .remove();
            $("[title='我的应用数据']").parent().parent().parent().hide(); // .remove();
        }

        clearfunc();

        $("body").click(function(){
            clearfunc();
        });

        $("body").dblclick(function(){
            clearfunc();
        });

        $("*").mouseenter(function(){
            clearfunc();
        });

        $("*").mouseleave(function(){
            clearfunc();
        });

    });

})();
