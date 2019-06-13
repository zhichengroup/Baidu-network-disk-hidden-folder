// ==UserScript==
// @name         百度网盘网页版隐藏“我的卡包”、“我的应用数据”和“已购资源”   2019-06-13 更新
// @namespace    https://github.com/zhichengroup/Baidu-network-disk-hidden-folder
// @version      0.9.11 beta
// @description  百度网盘网页版隐藏“我的卡包”、“我的应用数据”和“已购资源”   2019-06-13 更新
// @author       zhichengroup
// @match        *://pan.baidu.com/*
// @include      *://pan.baidu.com/*
// @require      https:code.jquery.com/jquery-1.12.4.min.js

/*
# 百度网盘网页版隐藏“我的卡包”、“我的应用数据”和“已购资源” 2019-06-13 更新
## 2019-06-13 更新
## pan.baidu.com
### 日期
2019-06-13
### 注意
此脚本只能在网页版隐藏“我的卡包”、“我的应用数据”和“已购资源”，并不能实际删除！
### 联系方式
zhichengroup@gmail.com
*/

// ==/UserScript==

(function() {
	'use strict';

	function clearfunc() {
        $("dd:first").hide();
        $("dd.open-enable.AuPKyz.g-clearfix:nth-of-type(1)").hide();
		$("dd.open-enable.AuPKyz.g-clearfix:nth-of-type(2)").hide();
        //$("[title='已购资源']").parent().parent().parent().hide(); // .remove();
		//$("[title='我的卡包']").parent().parent().parent().hide(); // .remove();
		$("[title='我的应用数据']").parent().parent().parent().hide(); // .remove();
        //console.log("Baiduwangpan_script_hide_func");
	};

	$("*").click(function() {
		clearfunc();
	});

	$("*").dblclick(function() {
		clearfunc();
	});

	$("*").mouseenter(function() {
		clearfunc();
	});

	$("*").mouseleave(function() {
		clearfunc();
	});

	$(document).ready(function() {
		clearfunc();
	});
	clearfunc();
	console.log("Baiduwangpan_script_hide_func_success");

})();
