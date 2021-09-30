export class CustomCharacterData {
    constructor(characters) {
        console.assert(characters instanceof Array);
        this._characters = characters;
        this._type = 'CustomCharacterData';
    }
    get characters() { return this._characters; }
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
        return `[${this._characters.join("")}]`;
    }
    toHTMLString() {
        return `[${this._characters.join("").replace('"', "&quot;")}]`;
    }
}
//# sourceMappingURL=customCharacterData.js.map