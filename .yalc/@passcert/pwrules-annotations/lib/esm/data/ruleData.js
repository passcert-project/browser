export class RuleData {
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
//# sourceMappingURL=ruleData.js.map