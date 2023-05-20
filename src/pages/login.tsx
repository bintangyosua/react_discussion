import LoginForm from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function Login() {
  return (
    <AuthLayout title="Login" type="login">
      <LoginForm />
    </AuthLayout>
  );
}
