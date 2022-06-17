"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatToNested = void 0;
//  递归方法
var flatToNested = function (arr, pId, pKey, childKey) {
    if (pId === void 0) { pId = 0; }
    if (pKey === void 0) { pKey = "id"; }
    if (childKey === void 0) { childKey = "children"; }
    return [].concat.apply([], arr.map(function (item) {
        var temp = JSON.parse(JSON.stringify(item[childKey]));
        delete item[childKey];
        return [].concat.apply([], __spreadArray([__assign(__assign({}, item), { pId: pId })], (0, exports.flatToNested)(temp, item[pKey], pKey, childKey), false));
    }));
};
exports.flatToNested = flatToNested;
// 作者：莫憾生
// 链接：https://juejin.cn/post/7109760886717284389
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
