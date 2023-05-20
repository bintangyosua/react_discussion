import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="John Doe"
        name="fullname"
      />
      <InputForm
        label="Username"
        type="text"
        placeholder="example@gmail.com"
        name="id_user"
      />
      <InputForm
        label="Password"
        type="passwprd"
        placeholder="**********"
        name="password_user"
      />
      <InputForm
        label="Confirm Password"
        type="passwprd"
        placeholder="**********"
        name="confirmpassword"
      />
      <Button classname="bg-blue-600 w-full" onClick={() => {}}>
        Login
      </Button>
    </form>
  );
};

export default FormRegister;
