"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = require("../utils/guid");
var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.guid = guid_1.guid();
        this.registry = registry;
    }
    return ContainerModule;
}());
exports.ContainerModule = ContainerModule;
var AsyncContainerModule = (function () {
    function AsyncContainerModule(registry) {
        this.guid = guid_1.guid();
        this.registry = registry;
    }
    return AsyncContainerModule;
}());
exports.AsyncContainerModule = AsyncContainerModule;
