(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.cofounder = {}));
}(this, function (exports) { 'use strict';

    var library = {};

    exports.default = library;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
