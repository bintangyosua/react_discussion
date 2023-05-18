interface Item {
  children: string;
}

const NavItem = ({ children }: Item) => {
  return (
    <li>
      <a>{children}</a>
    </li>
  );
};

export default NavItem;
