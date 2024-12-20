// firebase.js
import firestore from '@react-native-firebase/firestore';

// Ensure Firebase is initialized
if (!firestore().app) {
  firestore().initializeApp();
}

export default firestore;
