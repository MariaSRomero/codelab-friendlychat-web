/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const firebaseConfig = {
  apiKey: "AIzaSyDye0-B-eeHJmNd4vD9m2CgkSBX4CXA8bo",
  authDomain: "friendly-chat-f449a.firebaseapp.com",
  projectId: "friendly-chat-f449a",
  storageBucket: "friendly-chat-f449a.appspot.com",
  messagingSenderId: "365226232766",
  appId: "1:365226232766:web:196315cca6b5f21d6f87ef"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}