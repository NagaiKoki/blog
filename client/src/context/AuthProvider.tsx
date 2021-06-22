import firebase from "../lib/firebase";
import { FC, createContext, useEffect, useState } from "react";

type AuthContextType = {
  currentUser: firebase.User | undefined;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] =
    useState<firebase.User | undefined>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
