/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Nov 27 00:45
*/
KISSY.add("editor/plugin/remove-format",["editor","./button","./remove-format/cmd"],function(c,a){function b(){}var d=a("editor");a("./button");var e=a("./remove-format/cmd");c.augment(b,{pluginRenderUI:function(a){e.init(a);a.addButton("removeFormat",{tooltip:"\u6e05\u9664\u683c\u5f0f",listeners:{click:function(){a.execCommand("removeFormat")}},mode:d.Mode.WYSIWYG_MODE})}});return b});
