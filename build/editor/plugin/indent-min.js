/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Nov 27 00:43
*/
KISSY.add("editor/plugin/indent",["editor","./indent/cmd","./button"],function(d,b){function c(){}var e=b("editor"),f=b("./indent/cmd");b("./button");d.augment(c,{pluginRenderUI:function(a){f.init(a);a.addButton("indent",{tooltip:"\u589e\u52a0\u7f29\u8fdb\u91cf ",listeners:{click:function(){a.execCommand("indent");a.focus()}},mode:e.Mode.WYSIWYG_MODE})}});return c});
