export declare const Identifier: {
    ASCII_PRINTABLE: string;
    DIGIT: string;
    LOWER: string;
    SPECIAL: string;
    UNICODE: string;
    UPPER: string;
};
export declare const BlockListIdentifier: {
    HIBP: string;
    DEFAULT: string;
};
export declare const RuleName: {
    ALLOWED: string;
    MAX_CONSECUTIVE: string;
    REQUIRED: string;
    MIN_LENGTH: string;
    MAX_LENGTH: string;
    MIN_CLASSES: string;
    BLOCK_LIST: string;
};
export declare const CHARACTER_CLASS_START_SENTINEL = "[";
export declare const CHARACTER_CLASS_END_SENTINEL = "]";
export declare const PROPERTY_VALUE_SEPARATOR = ",";
export declare const PROPERTY_SEPARATOR = ";";
export declare const PROPERTY_VALUE_START_SENTINEL = ":";
export declare const CHARACTER_RANGE_START_SENTINEL = "(";
export declare const CHARACTER_RANGE_END_SENTINEL = ")";
export declare const SPACE_CODE_POINT: number;
export declare const SHOULD_NOT_BE_REACHED = "Should not be reached";
export declare const PwDefaultOptions: {
    length: number;
    ambiguous: boolean;
    number: boolean;
    minNumber: number;
    uppercase: boolean;
    minUppercase: number;
    lowercase: boolean;
    minLowercase: number;
    special: boolean;
    minSpecial: number;
    type: string;
    numWords: number;
    wordSeparator: string;
    capitalize: boolean;
    includeNumber: boolean;
};
