/*
Copyright 2013, KISSY v1.50dev
MIT Licensed
build time: Nov 27 00:40
*/
KISSY.add("editor/plugin/bold/cmd",["editor","../font/cmd"],function(e,a){var b=a("editor"),c=a("../font/cmd"),d=new b.Style({element:"strong",overrides:[{element:"b"},{element:"span",attributes:{style:"font-weight: bold;"}}]});return{init:function(a){c.addButtonCmd(a,"bold",d)}}});
