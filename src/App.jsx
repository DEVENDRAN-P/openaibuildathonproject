import React, { useState } from "react";
import { auth } from "./config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  // Signup function
  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      console.log("Signed up user:", userCredential.user);
      setEmail("");
      setPassword("");
      setIsSignup(false);
    } catch (error) {
      alert(error.message);
    }
  };

  // Login function
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      console.log("Logged in user:", userCredential.user);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to GST Buddy</h1>
      <div className="card">
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup ? (
          <button className="btn" onClick={handleSignup}>Sign Up</button>
        ) : (
          <button className="btn" onClick={handleLogin}>Log In</button>
        )}
        <div className="toggle">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span className="link" onClick={() => setIsSignup(false)}>Log In</span>
            </>
          ) : (
            <>
              New user?{" "}
              <span className="link" onClick={() => setIsSignup(true)}>Sign Up</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
