import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCniyYlv5mlfC7m-L7Zs6fHFDVK-2QyDl4",
  authDomain: "d2reactgallery.firebaseapp.com",
  projectId: "d2reactgallery",
  storageBucket: "d2reactgallery.appspot.com",
  messagingSenderId: "785232912486",
  appId: "1:785232912486:web:243d90230346ce00f50da7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
