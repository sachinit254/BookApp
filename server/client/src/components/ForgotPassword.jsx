import React from "react";

const ForgotPassword = ({ email, setEmail, submitHandler }) => {
  return (
    <>
      <div className="bg-darkslategray grid h-[88.6vh] place-items-center">
        <div className="bg-paleturquoise mx-auto w-[80%] rounded-lg py-8 lg:w-1/4">
          <form
            className="mb-6 flex flex-col items-center space-y-8"
            onSubmit={submitHandler}
          >
            <h4 className="font-poppins text-darkslategray w-[80%] text-center text-xl">
              Enter the registered email address
            </h4>
            <input
              type="email"
              placeholder="Email"
              className="font-poppins placeholder:font-poppins bg-darkslategray text-azure focus:ring-azure w-4/5 rounded-lg py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

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

export default ForgotPassword;
