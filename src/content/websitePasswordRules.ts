// search for rules when the page is loaded
document.addEventListener('DOMContentLoaded', event => {
    console.log("--- I LOADED EVERYTHING ---");
    searchDomForPasswordRules();
});

// search for rules when the tab was hidden and now is visible - when the tab has focus after the first time it was loaded. Otherwise, the code above would not run, since the page was already run.
document.addEventListener("visibilitychange", event => {

    if (document.visibilityState === "visible") {
        searchDomForPasswordRules();
    }

});

function searchDomForPasswordRules(): void {
    const policiesFound = document.querySelectorAll('[passwordrules]');

    // TODO what if there is more than a policy?
    if (policiesFound.length > 0) {

        console.log('FOUND -> ', policiesFound);

        console.log('FOUND POLICY -> ', policiesFound[0].attributes);

        console.log('FOUND POLICY NAME -> ', policiesFound[0].attributes.getNamedItem('passwordrules'));

        console.log('FOUND POLICY VALUE -> ', policiesFound[0].attributes.getNamedItem('passwordrules').value);

        chrome.runtime.sendMessage({
            command: 'bgWebsitePasswordRules',
            policyValue: policiesFound[0].attributes.getNamedItem('passwordrules').value,
            sender: 'passwordRestraints',
        });
    }
    else if (policiesFound.length == 0) {
        console.log("I found no password rules in this site");
    }
}