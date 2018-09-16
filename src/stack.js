"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.storage = [];
    }
    Stack.prototype.push = function (value) {
        this.storage.push(value);
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.count <= 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        this.storage.splice(-1, 1);
        return result;
    };
    Stack.prototype.peek = function () {
        return this.storage[this.count - 1];
    };
    Stack.prototype.length = function () {
        return this.count;
    };
    return Stack;
}());
exports["default"] = Stack;
