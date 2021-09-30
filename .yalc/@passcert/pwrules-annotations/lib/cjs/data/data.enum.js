"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PwDefaultOptions = exports.SHOULD_NOT_BE_REACHED = exports.SPACE_CODE_POINT = exports.CHARACTER_RANGE_END_SENTINEL = exports.CHARACTER_RANGE_START_SENTINEL = exports.PROPERTY_VALUE_START_SENTINEL = exports.PROPERTY_SEPARATOR = exports.PROPERTY_VALUE_SEPARATOR = exports.CHARACTER_CLASS_END_SENTINEL = exports.CHARACTER_CLASS_START_SENTINEL = exports.RuleName = exports.BlockListIdentifier = exports.Identifier = void 0;
exports.Identifier = {
    ASCII_PRINTABLE: "ascii-printable",
    DIGIT: "digit",
    LOWER: "lower",
    SPECIAL: "special",
    UNICODE: "unicode",
    UPPER: "upper",
};
exports.BlockListIdentifier = {
    HIBP: "hibp",
    DEFAULT: "default",
};
exports.RuleName = {
    ALLOWED: "allowed",
    MAX_CONSECUTIVE: "max-consecutive",
    REQUIRED: "required",
    MIN_LENGTH: "minlength",
    MAX_LENGTH: "maxlength",
    MIN_CLASSES: "minclasses",
    BLOCK_LIST: "blocklist",
};
exports.CHARACTER_CLASS_START_SENTINEL = "[";
exports.CHARACTER_CLASS_END_SENTINEL = "]";
exports.PROPERTY_VALUE_SEPARATOR = ",";
exports.PROPERTY_SEPARATOR = ";";
exports.PROPERTY_VALUE_START_SENTINEL = ":";
exports.CHARACTER_RANGE_START_SENTINEL = "(";
exports.CHARACTER_RANGE_END_SENTINEL = ")";
exports.SPACE_CODE_POINT = " ".codePointAt(0);
exports.SHOULD_NOT_BE_REACHED = "Should not be reached";
exports.PwDefaultOptions = {
    length: 14,
    ambiguous: false,
    number: true,
    minNumber: 1,
    uppercase: true,
    minUppercase: 0,
    lowercase: true,
    minLowercase: 0,
    special: false,
    minSpecial: 1,
    type: 'password',
    numWords: 3,
    wordSeparator: '-',
    capitalize: false,
    includeNumber: false,
};
//# sourceMappingURL=data.enum.js.map