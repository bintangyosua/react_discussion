import DropDownSubMenu from "./DropDownSubMenu";

const NavDropDown = () => {
  return (
    <li tabIndex={0}>
      <a>
        Parent
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul className="p-2 bg-base-100">
        <DropDownSubMenu />
        <DropDownSubMenu />
        <DropDownSubMenu />
      </ul>
    </li>
  );
};

export default NavDropDown;
