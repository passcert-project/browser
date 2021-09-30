export declare class PasswordBlocklist {
    private _blocklist;
    private static instance;
    get blocklist(): string[];
    set blocklist(newBlocklist: string[]);
    private constructor();
    static getInstance(): PasswordBlocklist;
    /**
     * Add a list of passwords to the default list, which contains the top 100 000 more used passwords, according to recent breaches.
     * @param newPasswords A list of passwords to add to the default one
     */
    appendToTheBlocklist(newPasswords: string[]): void;
}
