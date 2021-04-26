// get all the attributes from the test html
document.addEventListener('DOMContentLoaded', event => {
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

});