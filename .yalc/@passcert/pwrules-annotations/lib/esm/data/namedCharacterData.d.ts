export declare class NamedCharacterData {
    private _name;
    private _minChars;
    private _maxChars;
    private _type;
    constructor(name: string);
    get name(): string;
    get minChars(): string;
    set minChars(value: string);
    get maxChars(): string;
    set maxChars(value: string);
    get type(): string;
    toString(): string;
    toHTMLString(): string;
}
