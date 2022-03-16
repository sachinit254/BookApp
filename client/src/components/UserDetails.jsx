import React from "react";
import { useRef } from "react";

const UserDetails = (props) => {
  const {
    pic,
    setPic,
    profilePic,
    uploadPic,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    userData,
    setUserData,
    handleChange,
    submitHandler,
  } = props;

  const ref = useRef();

  // This function will remove the selected image from the input
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setUserData({ ...userData, profilePic: "" });
    setPic("");
  };

  console.log(profilePic);

  return (
    <div>
      <div className="bg-darkslategray top-50 left-50 border-1 absolute z-50 h-[calc(100vh-72px)] w-screen border-black filter">
        <div className="container mx-auto grid h-screen place-items-center">
          <div className="bg-paleturquoise relative mx-auto w-3/4 rounded-lg py-5 sm:w-2/5 lg:w-[30%]">
            <form onSubmit={submitHandler}>
              <div className="my-4 flex justify-center space-x-2">
                <input
                  required
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-[39%] rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={userData.firstname ? userData.firstname : ""}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-[39%] rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Last Name"
                  name="lastname"
                  value={userData.lastname ? userData.lastname : ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="City"
                  name="city"
                  value={userData.city ? userData.city : ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="text"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Phone Number"
                  name="phone"
                  value={userData.phone ? userData.phone : ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  required
                  type="email"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Email"
                  name="email"
                  value={userData.email ? userData.email : ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  type="password"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4 flex justify-center">
                <input
                  type="password"
                  className="font-poppins bg-darkslategray placeholder:font-poppins text-azure focus:ring-azure h-10 w-4/5 rounded-lg px-2 py-1 focus:border-transparent focus:outline-none focus:ring-2"
                  placeholder="Confirm Password"
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <div className="grid items-center">
                  <input
                    ref={ref}
                    type="file"
                    accept="image/*"
                    className={`mx-auto w-4/5 ${
                      pic ? "mb-0" : "mb-10"
                    } font-poppins tracking-tighter`}
                    onChange={(e) => uploadPic(e.target.files[0])}
                  />
                </div>
                {pic && (
                  <div className="mb-4 flex h-24 items-center justify-end">
                    <div className={`relative mr-3 h-20 w-1/4 rounded-lg`}>
                      <img
                        src={pic ? pic : ""}
                        className="h-full w-[80%] rounded-md"
                        alt=""
                      />
                      <button
                        className="text-darkslategray hover:bg-azure hover:text-darkslategray absolute top-1 right-8 rounded-xl bg-white px-0.5 text-xs"
                        onClick={(e) => imageRemove(e)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 grid w-full place-items-center">
                <button
                  className={`font-poppins bg-darkslategray text-md text-azure focus:ring-azure rounded-lg px-6 py-2 focus:border-transparent focus:outline-none focus:ring-2`}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
