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
# 百度网盘网页版隐藏“我的卡包”、“我的应用数据”和“已购资源”
### Baidu-network-disk-hidden-folder
### Tampermonkey GreasyFork
### 2019-06-13 更新
### pan.baidu.com
### 注意
此脚本只能在网页版隐藏“我的卡包”和“我的应用数据”，并不能实际删除！！！
### 无关脚本的话
“我的应用数据”文件夹是可以通过接口删除的。
理论上如果不用百度系app（比如百度输入法，百度浏览器等，我不知道“我的应用数据”文件夹是由哪个百度系app触发的）是不会再生成的。
目前正在测试，云端删除“我的应用数据”文件夹没有再自动恢复过，“我的卡包”文件夹删除。
### 联系方式
如果对这个脚本有兴趣，或者想尝试我的思路，脚本失效或者好久没更新请联系我，我会尽量完善。
zhichengroup@gmail.com   [greasyfork](https://greasyfork.org/scripts/371821)   [github](https://github.com/zhichengroup/Baidu-network-disk-hidden-folder)
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
