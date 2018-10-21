define(["require", "exports", "../utils/guid"], function (require, exports, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Context = (function () {
        function Context(container) {
            this.guid = guid_1.guid();
            this.container = container;
        }
        Context.prototype.addPlan = function (plan) {
            this.plan = plan;
        };
        Context.prototype.setCurrentRequest = function (currentRequest) {
            this.currentRequest = currentRequest;
        };
        return Context;
    }());
    exports.Context = Context;
});
