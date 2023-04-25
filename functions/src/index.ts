import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.objectFinalized = functions.storage.object().onFinalize((object) => {
    return console.log('File name is: ', object.name);
});
