import React from "react";
import PropTypes from "prop-types";
import { useInput } from "../utils/data";

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();
    login({ email: email, password: password });
  }

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
