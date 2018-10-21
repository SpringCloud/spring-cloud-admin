"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function guid() {
    function s4() {
        return Math.floor((Math.random() + 1) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
}
exports.guid = guid;
