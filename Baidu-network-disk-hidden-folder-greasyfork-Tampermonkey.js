// ========================================== 设置 ==========================================
 
// 可以自定义是否隐藏
// 修改 '是' 或 '否'
 
var 隐藏已购资源 = '是';
var 隐藏我的卡包 = '是';
var 隐藏我的应用数据 = '是';
var 共享给我的文件夹 = '是';
 
// 自定义隐藏文件夹，包括但不限于根目录，请慎重，文件夹之间请用英文状态下的分号隔开
// 注意：尽量使用英文状态的分号、要隐藏的文件或文件名尽量不要含有特殊字符、名字尽量准确
var 开启自定义文件夹隐藏 = '否';
var 自定义文件夹 = "来自：“百度相册” ; 来自：小飞机 ; 测试自定义隐藏文件夹1 ; 测试自定义隐藏文件夹2 ; 测试自定义隐藏文件夹3";
 
// 本插件的执行频率：默认为60，刷新时间范围建议在30-300之间（单位毫秒ms）。
var hide_update_time = 60;
 
// ========================================== 设置结束 =======================================
 
 
 
 
 
 
 
 
 
// todo:正则表达式和控制指定单级目录内文件夹和文件
 
// ==UserScript==
// @name         百度网盘网页版隐藏“我的卡包”、“我的应用数据”和“已购资源”
// @namespace    https://github.com/zhichengroup/Baidu-network-disk-hidden-folder
// @version      0.9.53 beta 2
// @description  百度网盘隐藏“我的卡包”、“我的应用数据”、“已购资源”和“共享给我的文件夹”   2021-01-19 更新
// @author       zhichengroup
// @match        *://pan.baidu.com/*
// @include      *://pan.baidu.com/*
// ==/UserScript==
 
(function() {
    'use strict';
    var dirList = [];
    if(隐藏已购资源 == '是'){
        dirList.push("已购资源");
    }
    if(隐藏我的卡包 == '是'){
        dirList.push("我的卡包");
    }
    if(隐藏我的应用数据 == '是'){
        dirList.push("我的应用数据");
    }
    if(共享给我的文件夹 == '是'){
        dirList.push("共享给我的文件夹");
    }
    if(开启自定义文件夹隐藏 == '是'){
        var dirListTemp = 自定义文件夹.split(";");
        dirListTemp.forEach((e)=>{
            e.split("；").forEach((e)=>{
                dirList.push(e.trim());
            });
        });
    }
 
    // ====== 监听触发器 ======
    clearfunc_new();
    $("*").click(function() {
        clearfunc_new();
    });
    $("*").dblclick(function() {
        clearfunc_new();
    });
    $("*").mouseenter(function() {
        clearfunc_new();
    });
    $("*").mouseleave(function() {
        clearfunc_new();
    });
    $(document).ready(function() {
        clearfunc_new();
    });
 
    // load
    window.onload = function(){
        clearfunc_new();
    };
 
    $(function () {
        clearfunc_new();
    });
 
    // setInterval 定时
    window.setInterval(clearfunc_new, hide_update_time);
 
    function clearfunc_new() {
        dirList.forEach(e=>{
            $("[title='"+e+"']").parent().parent().parent().hide();
        });
    }
 
    console.log("百度网盘网页版自定义隐藏文件夹插件已经运行",dirList);
 
})();
