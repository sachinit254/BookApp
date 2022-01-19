import React from "react";
import { useUserContext } from "../context/UserContext";
const ProfileModal = ({ setShowDetails }) => {
  const { userData } = useUserContext();
  console.log(`userData`, userData);
  return (
    <div className="bg-paleturquoise border-[1px] border-paleturquoise w-1/6 h-60 rounded-lg absolute top-20 right-6 z-50">
      <div className="relative h-6">
        <button
          className="block w-6 h-6 rounded-md hover:bg-darkslategray hover:text-white absolute top-[2px] right-[2px]"
          onClick={() => setShowDetails(false)}
        >
          X
        </button>
      </div>
      <div className="grid place-items-center">
        <img
          src={userData?.profilepic}
          alt="profilePic"
          className="w-16 h-16 mb-2 border-[1px] border-darkslategray rounded-full"
        />
        <h1>{userData?.firstname + " " + userData?.lastname}</h1>
        <h3 className="mb-4">{userData?.city}</h3>
        <div className="w-full flex justify-center space-x-4 h-8">
          <i className="fab fa-instagram text-red-700 text-[20px] cursor-pointer"></i>
          <i class="fab fa-facebook-f text-blue-700 text-[18px] cursor-pointer"></i>
        </div>
        <button className="bg-darkslategray px-3 py-1 rounded-lg text-paleturquoise">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
