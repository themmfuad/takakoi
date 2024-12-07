import LoginPageButtons from "@/components/login/buttons";
import LoginPageWidget from "@/components/login/widget";

export default function LoginPage() {
  return (
    <div className="flex flex-col space-y-9 items-center justify-center min-h-screen">
      {/* title */}
      <h1 className="text-2xl text-sky-500 montserrat-bold">Taka Koi ???</h1>
      <LoginPageButtons />
    </div>
  );
}
