const admin = require("firebase-admin");

const serviceAccount = require("../todoapp-27064-firebase-adminsdk-ly2fc-f85c13239c.json");
//for running functions locally , uncomment below lines and comment admin.Initialise()
// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// 	databaseURL: "https://todoapp-27064.firebaseio.com",
// 	storageBucket: "gs://todoapp-27064.appspot.com",
// });

admin.initializeApp();
const db = admin.firestore();

module.exports = { admin, db };
