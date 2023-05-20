import { useState, useEffect } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { logoutAPI } from "../../../api";

const Navbar = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    let loginStatus = localStorage.getItem("loggedIn");
    const parsedStatus = Boolean(loginStatus === "true");
    setStatus(parsedStatus || false);
  }, []);

  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-blue-500 shadow sm:items-baseline w-full mb-3 text-white">
      <Logo />
      <div className="sm:mb-0 self-center">
        {status ? (
          <NavItem
            href="#"
            onClick={() => {
              logoutAPI();

              localStorage.removeItem("id_user");
              localStorage.removeItem("password_user");
              localStorage.removeItem("loggedIn");
              localStorage.removeItem("sessionId");

              location.reload();
            }}>
            Logout
          </NavItem>
        ) : (
          <>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/register">Register</NavItem>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
