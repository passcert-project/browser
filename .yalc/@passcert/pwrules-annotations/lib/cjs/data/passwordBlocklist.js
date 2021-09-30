"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordBlocklist = void 0;
const defaultBlocklist = __importStar(require("./blocklistWordsData.json"));
class PasswordBlocklist {
    constructor() {
        this._blocklist = [];
        // add the 100k more used passwords to the blocklist
        this._blocklist = defaultBlocklist.blocklist;
    }
    get blocklist() {
        return this._blocklist;
    }
    set blocklist(newBlocklist) {
        this._blocklist = newBlocklist;
    }
    static getInstance() {
        if (!PasswordBlocklist.instance) {
            PasswordBlocklist.instance = new PasswordBlocklist();
        }
        return PasswordBlocklist.instance;
    }
    /**
     * Add a list of passwords to the default list, which contains the top 100 000 more used passwords, according to recent breaches.
     * @param newPasswords A list of passwords to add to the default one
     */
    appendToTheBlocklist(newPasswords) {
        newPasswords.forEach(np => {
            this._blocklist.push(np);
        });
    }
}
exports.PasswordBlocklist = PasswordBlocklist;
//# sourceMappingURL=passwordBlocklist.js.map