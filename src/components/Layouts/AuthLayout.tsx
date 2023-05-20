import { Link } from "react-router-dom";

interface NavigationProps {
  type: string;
}

const Navigation = ({ type }: NavigationProps) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-sm mt-3 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }

  return null;
};

interface authLayoutProps {
  title: string;
  children: React.ReactNode;
  type: string;
}

const AuthLayout = (props: authLayoutProps) => {
  const { title, children, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-5">
          Welcome, please enter your details!
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

export default AuthLayout;
