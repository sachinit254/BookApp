import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AlertMessage from "./AlertMessage";

const UserDetails = (props) => {
  const {
    pic,
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
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [pic, setPic] = useState();
  // const [from, setFrom] = useState("");
  // const [by, setBy] = useState("");

  // const [profilePic, setProfilePic] = useState();

  // const [heading, setHeading] = useState();
  // const [message, setMessage] = useState();
  // const [showMessage, setShowMessage] = useState(false);
  const ref = useRef();

  //uploading pic to cloudinary
  // const uploadPic = async (pics) => {
  //   setProfilePic(pics);
  //   if (pics?.type === "image/jpeg" || pics?.type === "image/png") {
  //     const body = new FormData();
  //     body.append("file", pics);
  //     body.append("upload_preset", "BookPic");
  //     body.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  //     try {
  //       const res = await axios.post(
  //         process.env.REACT_APP_CLOUDINARY_URL,
  //         body
  //       );
  //       const { data } = res;
  //       console.log(`data`, data);
  //       setPic(data.url.toString());
  //     } catch (error) {
  //       setShowMessage(true);
  //       setHeading("Error occurred");
  //       setMessage("Image cannot be uploaded");
  //     }
  //   } else {
  //     setShowMessage(true);
  //     setHeading("Error occurred");
  //     setMessage("Please select an image");
  //   }
  // };

  // This function will remove the selected image from the input
  const imageRemove = (e) => {
    e.preventDefault();
    ref.current.value = "";
    setUserData({ ...userData, profilePic: "" });
  };

  console.log(profilePic);

  return (
    <div>
      <div className="bg-darkslategray top-50 left-50 border-1 absolute z-50 h-[calc(100vh-72px)] w-screen border-black filter">
        <div className="container mx-auto grid h-screen place-items-center">
          <div className="bg-paleturquoise relative mx-auto w-3/4 rounded-lg py-5 sm:w-2/5 md:w-1/3 lg:w-[35%]">
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
                        className="h-full w-full rounded-md"
                        alt=""
                        ref={ref}
                      />
                      <button
                        className="text-azure bg-darkslategray hover:bg-azure hover:text-darkslategray absolute top-1 right-1 rounded-xl px-0.5 text-xs"
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
