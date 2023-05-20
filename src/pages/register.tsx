import FormRegister from "../components/Fragments/FormRegistert";
import AuthLayout from "../components/Layouts/AuthLayout";

export default function Register() {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
}
