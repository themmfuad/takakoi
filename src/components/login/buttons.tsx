export default function LoginPageButtons() {
  return (
    <>
      <div className="flex space-x-4">
        {/* <!-- Login Button --> */}
        <button className="px-6 py-2 border-2 border-sky-500 text-sky-500 font-semibold rounded-lg transition-colors duration-300 hover:bg-sky-500 hover:text-white">
          Login
        </button>

        {/* <!-- Signup Button --> */}
        <button className="px-6 py-2 border-2 border-sky-500 text-sky-500 font-semibold rounded-lg transition-colors duration-300 hover:bg-sky-500 hover:text-white">
          Signup
        </button>

        {/* <!-- Demo Button --> */}
        <button className="px-6 py-2 border-2 border-sky-500 text-sky-500 font-semibold rounded-lg transition-colors duration-300 hover:bg-sky-500 hover:text-white">
          Demo
        </button>
      </div>
    </>
  );
}
