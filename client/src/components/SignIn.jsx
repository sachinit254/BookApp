import React from "react";
// TODO email validation

const SignIn = ({ email, setEmail, password, setPassword, submitHandler }) => {
  return (
    <>
      <div className="grid place-items-center bg-darkslategray h-[88.6vh]">
        <div className="w-1/4 mx-auto bg-paleturquoise py-12 rounded-lg">
          <form
            className="flex flex-col items-center space-y-8 mb-6"
            onSubmit={submitHandler}
          >
            <input
              type="email"
              placeholder="Email"
              className="w-4/5 font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-4/5">
              <input
                type="password"
                placeholder="Password"
                className="w-full font-poppins placeholder:font-poppins bg-darkslategray text-azure rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure">
                <i class="fas fa-eye-slash"></i>
              </span>
              <span className="absolute top-1/2 transform -translate-y-1/2 left-60 text-sm text-azure">
                <i class="fas fa-eye"></i>
              </span>
            </div>
            <button
              className="w-4/5 font-poppins bg-azure py-2 px-3 rounded-lg font-semibold text-darkslategray hover:text-azure hover:bg-darkslategray"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="w-4/5 flex justify-between space-x-4 mx-auto">
            <a
              href="#"
              className="text-xs font-poppins text-darkslategray hover:underline hover:decoration-darkslategray font-semibold"
            >
              Forgot password?
            </a>
            <a
              href="/signup"
              className="text-xs font-poppins text-darkslategray hover:underline hover:decoration-darkslategray font-semibold"
            >
              Don't have an account ?<br /> Sign Up{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
