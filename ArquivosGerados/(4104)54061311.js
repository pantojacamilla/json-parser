    Error: The default Firebase app already exists. This means you called initializeApp() more than once without providing an app name as the second argument. In most cases you only need to call initializeApp() once. But if you do want to initialize multiple apps, pass a second argument to initializeApp() to give each app a unique name. &#xD;&#xA;    at FirebaseAppError.Error (native) &#xD;&#xA;    at FirebaseAppError.FirebaseError [as constructor] (/user_code/node_modules/firebase-admin/lib/utils/error.js:39:28) &#xD;&#xA;    at FirebaseAppError.PrefixedFirebaseError [as constructor] (/user_code/node_modules/firebase-admin/lib/utils/error.js:85:28) &#xD;&#xA;    at new FirebaseAppError (/user_code/node_modules/firebase-admin/lib/utils/error.js:119:28) &#xD;&#xA;    at FirebaseNamespaceInternals.initializeApp (/user_code/node_modules/firebase-admin/lib/firebase-namespace.js:68:23) &#xD;&#xA;    at FirebaseNamespace.initializeApp (/user_code/node_modules/firebase-admin/lib/firebase-namespace.js:362:30) &#xD;&#xA;    at categoryac (/user_code/index.js:34:11) &#xD;&#xA;    at WebhookClient.handleRequest (/user_code/node_modules/dialogflow-fulfillment/src/dialogflow-fulfillment.js:303:44) &#xD;&#xA;    at exports.dialogflowFirebaseFulfillment.functions.https.onRequest (/user_code/index.js:91:9) &#xD;&#xA;    at cloudFunction (/user_code/node_modules/firebase-functions/lib/providers/https.js:57:9)&#xD;&#xA; 