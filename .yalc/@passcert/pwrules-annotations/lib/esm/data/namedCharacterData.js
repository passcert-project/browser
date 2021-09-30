export class NamedCharacterData {
    constructor(name) {
        this._name = name;
        this._type = 'NamedCharacterData';
    }
    get name() {
        return this._name.toLowerCase();
    }
    get minChars() {
        return this._minChars;
    }
    set minChars(value) {
        this._minChars = value;
    }
    get maxChars() {
        return this._maxChars;
    }
    set maxChars(value) {
        this._maxChars = value;
    }
    get type() {
        return this._type;
    }
    toString() {
        return this._name;
    }
    toHTMLString() {
        return this._name;
    }
}
//# sourceMappingURL=namedCharacterData.js.map