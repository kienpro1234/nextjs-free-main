import RegisterForm from "@/app/(auth)/register/register-form";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-center text-3xl">Đăng kí</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
