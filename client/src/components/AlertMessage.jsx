import React from "react";

const AlertMessage = ({ message, heading, setShowMessage }) => {
  return (
    <div className="fixed w-1/4 py-4 space-y-2 bg-azure rounded-lg top-10 left-1/2 transform -translate-x-1/2">
      <button
        className="absolute top-0 right-2"
        onClick={() => setShowMessage(false)}
      >
        <i class="fas fa-times text-darkslategray"></i>
      </button>
      <h1 className="text-center text-lg font-semibold text-darkslategray font-poppins">
        {heading}
      </h1>
      <p className="text-center text-darkslategray font-medium font-poppins">
        {message}
      </p>
    </div>
  );
};

export default AlertMessage;
