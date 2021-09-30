"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleData = void 0;
class RuleData {
    constructor(name, value) {
        this._name = name;
        this.value = value;
    }
    get name() {
        return this._name;
    }
    toString() {
        return JSON.stringify(this);
    }
}
exports.RuleData = RuleData;
//# sourceMappingURL=ruleData.js.map