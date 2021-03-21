import React from "react";
import { Router } from "react-router-dom";

import { LoginForm } from "../../modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
        <LoginForm />
    </div>
  </section>
);

export default Auth;