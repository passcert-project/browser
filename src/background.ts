import MainBackground from './background/main.background';

const bitwardenMain = (window as any).bitwardenMain = new MainBackground();
bitwardenMain.bootstrap().then(() => {
    // Finished bootstrapping
});

/* function handleMessage(request: any, sender: any, sendResponse: any) {
    console.log("Message from the content script: " +
      request.greeting + request.policyValue);
    sendResponse({response: "I received this value for the policy: " + request.policyValue});
  }

  chrome.runtime.onMessage.addListener(handleMessage); */