// import NavDropDown from "./DropDown";
import NavItem from "./NavItem";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <NavItem>Home</NavItem>
            <NavItem>Login</NavItem>
            {/* <NavDropDown /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
