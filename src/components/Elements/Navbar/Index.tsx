import Logo from "./Logo";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-blue-300 shadow sm:items-baseline w-full">
      <Logo />
      <div className="sm:mb-0 self-center">
        <NavItem>Login</NavItem>
      </div>
    </nav>
  );
};

export default Navbar;
