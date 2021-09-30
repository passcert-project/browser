export declare class PasswordRulesParser {
    /**
     * Get all the rules in the provided input string.
     * @param input The string that contains the rules to be parsed.
     * @param formatRulesForMinifiedVersion True if the "allowed" rule should not contain the classes of the "required" rule as well. False if it should.
     * @returns An array of rules ready to be used by the programmer.
     */
    parsePasswordRules(input: string, formatRulesForMinifiedVersion?: boolean): any[];
    /**
     * Check if the character received is a letter.
     * @param c The character to analyze.
     * @returns True if the c is an identifier character and False if not.
     */
    private _isIdentifierCharacter;
    /**
     * Check if the character received is a digit.
     * @param c The character to analyze.
     * @returns True if the c is a digit and False if not.
     */
    private _isASCIIDigit;
    /**
     * Check if the character received is an ASCII printable character - special character.
     * @param c The character to analyze.
     * @returns True if the c is an ASCII printable character and False if not.
     */
    private _isASCIIPrintableCharacter;
    /**
     * Check if the character received is a white space character.
     * @param c The character to analyze.
     * @returns True if the c is a white space character and False if not.
     */
    private _isASCIIWhitespace;
    /**
     * Check if the object received has a range for minimum and maximum characters.
     * @param o The object to analyze.
     * @returns True if the o has a range and False if not.
     */
    private _hasCharRange;
    /**
     * Get the adapted ASCII code for a given character.
     * @param c The character to analyze.
     * @returns The adapted ASCII code for the character.
     */
    private _bitSetIndexForCharacter;
    /**
    * Get the character correspondent to the adapted ASCII code provided in index.
    * @param index The adapted ASCII code to analyze.
    * @returns The character correspondent to the given adapted ASCII code.
    */
    private _characterAtBitSetIndex;
    /**
     * Sets the value of an interval of the bitSet to true, depending on which namedCharacterClass it's analyzing.
     * Example: For the "upper" character class, it will set to True the indexes that correspond to the ASCII value of the upper case letters.
     * @param bitSet An array with the size of the printable characters.
     * @param namedCharacterClass The character class to analyze - "upper", "lower", "digit", "special".
     */
    private _markBitsForNamedCharacterClass;
    /**
     * Sets the value of an interval of the bitset to true, depending on which customCharacterClass it's analyzing.
     * @param bitSet An array with the size of the printable characters.
     * @param customCharacterClass A custom character class.
     */
    private _markBitsForCustomCharacterClass;
    /**
     * Get the values correspondent to each "required" rule, whether it's a whole character class or just some characters.
     * @param propertyValues The value of the rule to analyze, e.g., "upper", "digit", "[abc]"
     * @param keepCustomCharacterClassFormatCompliant Whether to copy the required classes to allowed or not.
     * @returns An array containing the character classes that are required.
     */
    private _canonicalizedPropertyValues;
    /**
     * Marks the range of every required character class as undefined aka deletes the range.
     * @param passwordRules The array of rules to verify
     */
    private _markRangesAsUndefined;
    /**
     * Get the next index in the input which is not a white space.
     * @param input The string that contains the rules to be parsed.
     * @param index The index of the input to check.
     * @returns The index of the next character that is not a white space character.
     */
    private _indexOfNonWhitespaceCharacter;
    /**
     * Parses the identifier of each rule.
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The name of the identifier and the last position analyzed.
     */
    private _parseIdentifier;
    /**
     * Parses the identifier of each rule.
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The name of the identifier and the last position analyzed.
     */
    private _parseRange;
    /**
     * Check if the identifier is a valid one for the "required" and "allowed" rules.
     * @param identifier The identifier to verify.
     * @returns True if it is a valid identifier. False if it is not a valid identifier.
     */
    private _isValidRequiredOrAllowedPropertyValueIdentifier;
    /**
     * Check if the identifier is a valid one for the "blocklist" rule.
     * @param identifier The identifier to verify.
     * @returns True if it is a valid identifier. False if it is not a valid identifier.
     */
    private _isValidBlockListPropertyValueIdentifier;
    /**
     * Parse a custom character class. These classes are defined by the user and are surrounded by squared brackets ([]).
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns Returns an array with the custom class information and the last position analyzed
     */
    private _parseCustomCharacterClass;
    /**
     * Parse the values given to the rules "required" and "allowed".
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns Returns an array with the information about the required and allowed classes and the last position analyzed
     */
    private _parsePasswordRequiredOrAllowedPropertyValue;
    /**
     * Parse the values given to the rule "blocklist". If it's 'default', there is a list with the 100 000 most commonly used passwords.
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns Returns an array with the information about the blocklist and the last position analyzed
     */
    private _parseBlockListPropertyValue;
    /**
     * Parse a password rule.
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The parsed rule and the last position analyzed.
     */
    private _parsePasswordRule;
    /**
     * Parse the values given to the rules "minlength" and "maxlength".
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The value for the rule and the last position analyzed.
     */
    private _parseMinLengthMaxLengthPropertyValue;
    /**
     * Parse the values given to the rule "max-consecutive".
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The value for the rule and the last position analyzed.
     */
    private _parseMaxConsecutivePropertyValue;
    /**
     * Parse the values given to the rules "minclasses".
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The value for the rule and the last position analyzed.
     */
    private _parseMinClassesPropertyValue;
    /**
     * Parse the values that are only numbers. Used in the "max-consecutive", "minlength" and "maxlength" identifiers.
     * @param input The string that contains the rules to be parsed.
     * @param position The position from where to start parsing the input.
     * @returns The value for the rule and the last position analyzed.
     */
    private _parseInteger;
    /**
     * Get all the rules found in the description.
     * @param input The string that contains the rules to be parsed.
     * @returns All the rules found in the input.
     */
    private _parsePasswordRulesInternal;
    /**
     * Fix range incoherences that may be present in the rules.
     * @param passwordRules The array of rules to verify
     * @param classesSeen The character classes seen
     */
    private _fixRangeIncoherences;
}
