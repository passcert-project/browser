export declare class CustomCharacterData {
    private _characters;
    private _minChars;
    private _maxChars;
    private _type;
    constructor(characters: string[]);
    get characters(): string[];
    get minChars(): string;
    set minChars(value: string);
    get maxChars(): string;
    set maxChars(value: string);
    get type(): string;
    toString(): string;
    toHTMLString(): string;
}
