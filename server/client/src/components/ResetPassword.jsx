import React from "react";

const ResetPassword = (props) => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    submitHandler,
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
  } = props;
  return (
    <>
      <div className="bg-darkslategray grid h-[88.6vh] place-items-center">
        <div className="bg-paleturquoise mx-auto w-[80%] rounded-lg py-8 lg:w-1/4">
          <form
            className="mb-6 flex flex-col items-center space-y-8"
            onSubmit={submitHandler}
          >
            <h4 className="font-poppins text-darkslategray w-[80%] text-center text-xl">
              Reset Password
            </h4>
            <div className="relative w-4/5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-full rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
                required
              />
              <span className="text-azure absolute top-1/2 right-[5%] -translate-y-1/2 transform text-sm">
                <button onClick={togglePassword}>
                  <i
                    class={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                  ></i>
                </button>
              </span>
            </div>
            <div className="relative w-4/5">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-full rounded-lg px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                pattern=".{8,}"
                title="Minimum eight characters required."
                required
              />
              <span className="text-azure absolute top-1/2 right-[5%] -translate-y-1/2 transform text-sm">
                <button onClick={toggleConfirmPassword}>
                  <i
                    class={
                      showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"
                    }
                  ></i>
                </button>
              </span>
            </div>

            <button
              className="font-poppins bg-azure text-darkslategray hover:text-azure hover:bg-darkslategray w-4/5 rounded-lg py-2 px-3 font-semibold"
              type="submit"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
