import { guid } from "../utils/guid";
var Context = (function () {
    function Context(container) {
        this.guid = guid();
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
export { Context };
