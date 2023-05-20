interface Item {
  children: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ children, href, onClick }: Item) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-md no-underline hover:text-blue-dark ml-2 px-1">
      {children}
    </a>
  );

  return null;
};

export default NavItem;
