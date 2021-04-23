# Some notes that might be useful in the development phase

In the print `@doAutoFill: options = `
- go to `pageDetails > 0 > details > forms` to get the action of the form and the method used. 
  - gets the first line of the form like `<form id="credential" action="/cas/login" method="post" data-bitwarden-watching="1">`
- go to `pageDetails > 0 > details > fields > [1]` --- possibly the second field --- to get the password field of the form


## Setting up the policy annotations

1. create a new content-script
2. add it to the manifest.json
3. add it to the webpack.config.js

- Changed the constructor in `main.background.ts`, line 246, to add the passwordGenerationService, which is gonna be needed in the `runtime.background.ts` to support the new command.

- to Have the password generator generating according to policy, maybe search in `add-edit.component.ts` or `password-generator.component.ts`. 

- I THINK ITS THE `password-generator.component.ts` @ `/Users/mikibakaiki/github/browser/jslib/src/angular/components/password-generator.component.ts`