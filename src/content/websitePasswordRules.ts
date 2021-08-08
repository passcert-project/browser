// search for rules when the page is loaded
document.addEventListener('DOMContentLoaded', event => {
    searchDomForPasswordRules();
});

// search for rules when the tab was hidden and now is visible - when the tab has focus after the first time it was loaded. Otherwise, the code above would not run, since the page was already run.
document.addEventListener('visibilitychange', event => {

    if (document.visibilityState === 'visible') {
        searchDomForPasswordRules();
    }
});

function searchDomForPasswordRules(): void {
    const policiesFound = document.querySelectorAll('[passwordrules]');

    // TODO what if there is more than one policy?
    if (policiesFound.length > 0) {
        chrome.runtime.sendMessage({
            command: 'bgWebsitePasswordRules',
            rulesValue: policiesFound[0].attributes.getNamedItem('passwordrules').value,
            sender: 'websitePasswordRules',
        });
    }
    // TODO search the quirks in apple's repo
    else if (policiesFound.length === 0) {
        chrome.runtime.sendMessage({
            command: 'bgWebsitePasswordRules',
            rulesValue: 'no-rules',
            sender: 'websitePasswordRules',
        });
    }
}