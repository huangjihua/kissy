/** Compiled By kissy-xtemplate */
KISSY.add(function (S, require, exports, module) {
        return function (scopes, S, undefined) {
            var buffer = "",
                config = this.config,
                engine = this,
                moduleWrap, utils = config.utils;
            if (typeof module != "undefined" && module.kissy) {
                moduleWrap = module;
            }
            var runBlockCommandUtil = utils["runBlockCommand"],
                getExpressionUtil = utils["getExpression"],
                getPropertyOrRunCommandUtil = utils["getPropertyOrRunCommand"];
            buffer += '<div class="';
            var id0 = getPropertyOrRunCommandUtil(engine, scopes, {}, "prefixCls", 0, 1, undefined, false);
            buffer += getExpressionUtil(id0, true);
            buffer += 'editor-tools"\n     id="ks-editor-tools-';
            var id1 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'id', 0, 2, undefined, false);
            buffer += getExpressionUtil(id1, true);
            buffer += '">\n\n</div>\n\n<!--\nhttp://johanbrook.com/browsers/native-momentum-scrolling-ios-5/\nios 不能放在 iframe 上！\n-->\n\n<div class="';
            var id2 = getPropertyOrRunCommandUtil(engine, scopes, {}, "prefixCls", 0, 11, undefined, false);
            buffer += getExpressionUtil(id2, true);
            buffer += 'editor-textarea-wrap"\n\n';
            var config3 = {};
            var params4 = [];
            var id5 = getPropertyOrRunCommandUtil(engine, scopes, {}, "mobile", 0, 13, undefined, true);
            params4.push(id5);
            config3.params = params4;
            config3.fn = function (scopes) {
                var buffer = "";
                buffer += '\nstyle="overflow:scroll;-webkit-overflow-scrolling:touch;"\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scopes, config3, "if", 13);
            buffer += '\n\nid="ks-editor-textarea-wrap-';
            var id6 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'id', 0, 17, undefined, false);
            buffer += getExpressionUtil(id6, true);
            buffer += '"\n>\n\n<textarea\n        id="ks-editor-textarea-';
            var id7 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'id', 0, 21, undefined, false);
            buffer += getExpressionUtil(id7, true);
            buffer += '"\n        class="';
            var id8 = getPropertyOrRunCommandUtil(engine, scopes, {}, "prefixCls", 0, 22, undefined, false);
            buffer += getExpressionUtil(id8, true);
            buffer += 'editor-textarea"\n\n';
            var config9 = {};
            var params10 = [];
            var id11 = getPropertyOrRunCommandUtil(engine, scopes, {}, "textareaAttrs", 0, 24, undefined, true);
            params10.push(id11);
            config9.params = params10;
            config9.fn = function (scopes) {
                var buffer = "";
                buffer += '\n';
                var id12 = getPropertyOrRunCommandUtil(engine, scopes, {}, "xindex", 0, 25, undefined, false);
                buffer += getExpressionUtil(id12, true);
                buffer += '="';
                var id13 = getPropertyOrRunCommandUtil(engine, scopes, {}, ".", 0, 25, undefined, false);
                buffer += getExpressionUtil(id13, true);
                buffer += '"\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scopes, config9, "each", 24);
            buffer += '\n\n';
            var config14 = {};
            var params15 = [];
            var id16 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'mode', 0, 28, undefined, true);
            params15.push(id16);
            config14.params = params15;
            config14.fn = function (scopes) {
                var buffer = "";
                buffer += '\nstyle="display:none"\n';
                return buffer;
            };
            buffer += runBlockCommandUtil(engine, scopes, config14, "if", 28);
            buffer += '\n\n>';
            var id17 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'data', 0, 32, undefined, false);
            buffer += getExpressionUtil(id17, true);
            buffer += '</textarea>\n\n</div>\n\n<div class="';
            var id18 = getPropertyOrRunCommandUtil(engine, scopes, {}, "prefixCls", 0, 36, undefined, false);
            buffer += getExpressionUtil(id18, true);
            buffer += 'editor-status"\n     id="ks-editor-status-';
            var id19 = getPropertyOrRunCommandUtil(engine, scopes, {}, 'id', 0, 37, undefined, false);
            buffer += getExpressionUtil(id19, true);
            buffer += '">\n\n</div>';
            return buffer;
        }
});