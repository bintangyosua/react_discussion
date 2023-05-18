interface Item {
  children: string;
}

const NavItem = ({ children }: Item) => {
  return (
    <a
      href="#"
      className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">
      {children}
    </a>
  );
};

export default NavItem;
