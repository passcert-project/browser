import * as defaultBlocklist from "./blocklistWordsData.json";
export class PasswordBlocklist {
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
//# sourceMappingURL=passwordBlocklist.js.map