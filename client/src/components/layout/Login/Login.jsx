import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, getDoc , setDoc} from "firebase/firestore"; 
import "./Login.css";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerType, setRegisterType] = useState("user"); 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);

          if (userData.type === "admin") {
            navigate('/admin');
          } else {
            navigate('/home');
          }
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const register = async () => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, registerEmail);

      if (signInMethods.length === 0) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

        await setDoc(doc(db, "users", newUser.user.uid), {
          email: registerEmail,
          type: registerType 
        });

        console.log(newUser);
        setMessage("User created successfully");
      } else {
        setMessage("Email already exists");
      }
    } catch (error) {
      console.log(error.message);
      setMessage("Error creating user");
    }
  };

  const login = async () => {
    try {
      const loggedInUser = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(loggedInUser);
    } catch (error) {
      setMessage(error.message);
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
    setMessage("");
  };

  const toggleRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
    setMessage("");
  };

  return (
    <div className="login-container">
      <div className="buttons-container">
        <button onClick={toggleLogin}>Login</button>
      </div>

      <div className={`form-container ${showLogin ? 'show-login' : 'hide-login'}`}>
        <h3>Login</h3>
        <div className="login-form">
          <input
            type="email"
            placeholder="Email..."
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <button onClick={login}>Login</button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={toggleRegister}>Register</button>
      </div>
      <div className={`form-container ${showRegister ? 'show-register' : ''}`}>
        <h3>Register User</h3>
        <div className="register-form">
          <input
            type="email"
            placeholder="Email..."
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />

          <button onClick={register}>Create User</button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>

      <h4>User Logged In:</h4>
      {user && user.email}

      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default Login;
