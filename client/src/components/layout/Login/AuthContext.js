import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth , db} from "../../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const register = async (registerEmail, registerPassword, userType) => {
  try {
    const newUser = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    await setDoc(doc(db, "users", newUser.user.uid), {
      email: registerEmail,
      type: userType,
    });
    console.log(newUser);
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (loginEmail, loginPassword) => {
  try {
    const loggedInUser = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(loggedInUser);
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async () => {
  await signOut(auth);
};

export const useAuthListener = () => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        setUserType(userDoc.data()?.type || "user");
      } else {
        setUserType(null);
      }
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return { user, userType };
};
