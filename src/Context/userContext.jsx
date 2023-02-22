import React, { createContext, useEffect, useState } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setcurrentUser] = useState();
  const [loadingData, setloadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setcurrentUser(currentUser);
      setloadingData(false);
    });
    return unsubscribe;
  }, []);

  const signUp = (email, pwd) => {
    createUserWithEmailAndPassword(auth, email, pwd);
  };

  const signIn = (email, pwd) => {
    signInWithEmailAndPassword(auth, email, pwd);
  };

  return (
    <UserContext.Provider value={{ signUp, signIn, currentUser }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
