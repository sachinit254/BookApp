import React, { useState } from "react";

const SignIn = ({ email, setEmail, password, setPassword, submitHandler }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="bg-darkslategray grid h-[88.6vh] place-items-center">
        <div className="bg-paleturquoise mx-auto w-[80%] rounded-lg py-12 lg:w-1/4">
          <form
            className="mb-6 flex flex-col items-center space-y-8"
            onSubmit={submitHandler}
          >
            <input
              type="email"
              placeholder="Email"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-4/5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-full rounded-lg py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="text-azure absolute top-1/2 right-[5%] -translate-y-1/2 transform text-sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>
            <button
              className="font-poppins bg-azure text-darkslategray hover:text-azure hover:bg-darkslategray w-4/5 rounded-lg py-2 px-3 font-semibold"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mx-auto flex w-4/5 justify-between space-x-4">
            <a
              href="/#"
              className="font-poppins text-darkslategray hover:decoration-darkslategray text-xs font-semibold hover:underline"
            >
              Forgot password?
            </a>
            <a
              href="/signup"
              className="font-poppins text-darkslategray hover:decoration-darkslategray text-xs font-semibold hover:underline"
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
