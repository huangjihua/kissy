/** Compiled By kissy-xtemplate */
KISSY.add(function (S, require, exports, module) {
        /*jshint quotmark: false, unused:false, indent:false*/
        return function (scopes, S, undefined) {
            var buffer = "",
                config = this.config,
                engine = this,
                moduleWrap, utils = config.utils;
            if (typeof module !== "undefined" && module.kissy) {
                moduleWrap = module;
            }
            var runBlockCommandUtil = utils.runBlockCommand,
                getExpressionUtil = utils.getExpression,
                getPropertyOrRunCommandUtil = utils.getPropertyOrRunCommand;
            buffer += '<div class="';
            var config1 = {};
            var params2 = [];
            params2.push('header');
            config1.params = params2;
            var id0 = getPropertyOrRunCommandUtil(engine, scopes, config1, "getBaseCssClasses", 0, 1, true, undefined);
            buffer += id0;
            buffer += '">\n    <a id="ks-date-picker-decade-panel-previous-century-btn-';
            var id3 = getPropertyOrRunCommandUtil(engine, scopes, {}, "id", 0, 2, undefined, false);
            buffer += getExpressionUtil(id3, true);
            buffer += '"\n       class="';
            var config5 = {};
            var params6 = [];
            params6.push('prev-century-btn');
            config5.params = params6;
            var id4 = getPropertyOrRunCommandUtil(engine, scopes, config5, "getBaseCssClasses", 0, 3, true, undefined);
            buffer += id4;
            buffer += '"\n       href="#"\n       role="button"\n       title="';
            var id7 = getPropertyOrRunCommandUtil(engine, scopes, {}, "previousCenturyLabel", 0, 6, undefined, false);
            buffer += getExpressionUtil(id7, true);
            buffer += '"\n       hidefocus="on">\n    </a>\n    <div class="';
            var config9 = {};
            var params10 = [];
            params10.push('century');
            config9.params = params10;
            var id8 = getPropertyOrRunCommandUtil(engine, scopes, config9, "getBaseCssClasses", 0, 9, true, undefined);
            buffer += id8;
            buffer += '"\n         id="ks-date-picker-decade-panel-century-';
            var id11 = getPropertyOrRunCommandUtil(engine, scopes, {}, "id", 0, 10, undefined, false);
            buffer += getExpressionUtil(id11, true);
            buffer += '">\n                ';
            var id12 = getPropertyOrRunCommandUtil(engine, scopes, {}, "startYear", 0, 11, undefined, false);
            buffer += getExpressionUtil(id12, true);
            buffer += '-';
            var id13 = getPropertyOrRunCommandUtil(engine, scopes, {}, "endYear", 0, 11, undefined, false);
            buffer += getExpressionUtil(id13, true);
            buffer += '\n    </div>\n    <a id="ks-date-picker-decade-panel-next-century-btn-';
            var id14 = getPropertyOrRunCommandUtil(engine, scopes, {}, "id", 0, 13, undefined, false);
            buffer += getExpressionUtil(id14, true);
            buffer += '"\n       class="';
            var config16 = {};
            var params17 = [];
            params17.push('next-century-btn');
            config16.params = params17;
            var id15 = getPropertyOrRunCommandUtil(engine, scopes, config16, "getBaseCssClasses", 0, 14, true, undefined);
            buffer += id15;
            buffer += '"\n       href="#"\n       role="button"\n       title="';
            var id18 = getPropertyOrRunCommandUtil(engine, scopes, {}, "nextCenturyLabel", 0, 17, undefined, false);
            buffer += getExpressionUtil(id18, true);
            buffer += '"\n       hidefocus="on">\n    </a>\n</div>\n<div class="';
            var config20 = {};
            var params21 = [];
            params21.push('body');
            config20.params = params21;
            var id19 = getPropertyOrRunCommandUtil(engine, scopes, config20, "getBaseCssClasses", 0, 21, true, undefined);
            buffer += id19;
            buffer += '">\n    <table class="';
            var config23 = {};
            var params24 = [];
            params24.push('table');
            config23.params = params24;
            var id22 = getPropertyOrRunCommandUtil(engine, scopes, config23, "getBaseCssClasses", 0, 22, true, undefined);
            buffer += id22;
            buffer += '" cellspacing="0" role="grid">\n        <tbody id="ks-date-picker-decade-panel-tbody-';
            var id25 = getPropertyOrRunCommandUtil(engine, scopes, {}, "id", 0, 23, undefined, false);
            buffer += getExpressionUtil(id25, true);
            buffer += '">\n        ';
            var config27 = {};
            var params28 = [];
            params28.push('date/picker/decade-panel/decades-xtpl');
            config27.params = params28;
            if (moduleWrap) {
                require("date/picker/decade-panel/decades-xtpl");
                config27.params[0] = moduleWrap.resolveByName(config27.params[0]);
            }
            var id26 = getPropertyOrRunCommandUtil(engine, scopes, config27, "include", 0, 24, false, undefined);
            buffer += id26;
            buffer += '\n        </tbody>\n    </table>\n</div>';
            return buffer;
        };
});