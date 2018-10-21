define(["require", "exports", "../constants/literal_types", "../utils/guid"], function (require, exports, literal_types_1, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Binding = (function () {
        function Binding(serviceIdentifier, scope) {
            this.guid = guid_1.guid();
            this.activated = false;
            this.serviceIdentifier = serviceIdentifier;
            this.scope = scope;
            this.type = literal_types_1.BindingTypeEnum.Invalid;
            this.constraint = function (request) { return true; };
            this.implementationType = null;
            this.cache = null;
            this.factory = null;
            this.provider = null;
            this.onActivation = null;
            this.dynamicValue = null;
        }
        Binding.prototype.clone = function () {
            var clone = new Binding(this.serviceIdentifier, this.scope);
            clone.activated = false;
            clone.implementationType = this.implementationType;
            clone.dynamicValue = this.dynamicValue;
            clone.scope = this.scope;
            clone.type = this.type;
            clone.factory = this.factory;
            clone.provider = this.provider;
            clone.constraint = this.constraint;
            clone.onActivation = this.onActivation;
            clone.cache = this.cache;
            return clone;
        };
        return Binding;
    }());
    exports.Binding = Binding;
});
