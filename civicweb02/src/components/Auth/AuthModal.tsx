import React from "react";
import { useState } from "react";
import "../../styles/AuthModal.css";
import NINInput from "./NinInput";
import PhoneInput from "./PhoneInput";
import SocialButtons from "./SocialButtons";

const AuthModal = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    

  return (
    <div className="auth-modal">
      <button className="close-button">×</button>
      <h2 className="auth-title">Sign-up</h2>
      <NINInput />
      <PhoneInput />
      <p className="auth-info-text">
        We'll call or text you to confirm your number. Standard message and data
        rates apply.
      </p>
      <div className="auth-buttons">
        <button className="primary-button">Continue</button>
        <button className="email-button">📧 Continue With Email</button>
      </div>
      <p className="auth-divider">— Or Continue With —</p>
      <SocialButtons />
    </div>
  );
};

export default AuthModal;
