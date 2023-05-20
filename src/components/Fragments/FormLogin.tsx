import React, { useState, useEffect } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { loginAPI } from "../../services/authAPI";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    if (storedLoggedIn === "true") setLoggedIn(true);
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await loginAPI(username, password);

      if (response.success) {
        localStorage.setItem("loggedIn", true.toString());
        localStorage.setItem("id_user", username);
        localStorage.setItem("password_user", password);
        localStorage.setItem("sessionId", response.sessionId);

        setLoggedIn(true);
      } else {
        setLoginError(true);
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  if (loggedIn) {
    window.location.href = "/";
  }

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="johndoe"
        name="id_user"
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="**********"
        name="password_user"
        onChange={(e) => setPassword(e.target.value)}
      />
      {loginError && (
        <div
          className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
          role="alert">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">
              {" "}
              Username or password is incorrect{" "}
            </span>
          </div>
        </div>
      )}

      <Button classname="bg-blue-600 w-full" type="submit" onClick={() => {}}>
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
