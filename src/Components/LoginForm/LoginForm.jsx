import React from "react";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/mail.png";
import password_icon from "../Assets/password.png";
const LoginForm = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center m-0 p-0 ">
     
          <div className="text-pink-500 font-semibold text-2xl m-1.5">Login Form</div>
 
        <div className="flex flex-col items-center justify-center bg-gray-300 px-1 py-1.5 rounded-md  shadow-md">
          <div className="px-2 py-1 m-1 flex justify-center items-center">
            <img src={user_icon} alt="" className="w-5 m-1 bg-pink-200 rounded-2xl " />
            <input
              type="text"
              className="outline-pink-200 border rounded-sm bg-gray-200 px-1 py-0.5"
            />
          </div>
          <div className="px-2 py-1 m-1 flex justify-center items-center">
            <img src={email_icon} alt="" className="w-5 m-1  bg-pink-200 rounded" />
            <input
              type="email"
              className="outline-pink-200 border rounded-sm bg-gray-200 px-1 py-0.5"
            />
          </div>
          <div className="px-2 py-1 m-1 flex justify-center items-center">
            <img src={password_icon} alt="" className="w-5 m-1 bg-pink-200 rounded " />
            <input
              type="password"
              className="outline-pink-200 border rounded-sm bg-gray-200 px-1 py-0.5"
            />
          </div>
          <button
            className="text-white text-sm font-semibold border-none shadow-md rounded-lg bg-pink-300
            hover:bg-pink-500 px-2 py-0.5"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  
  );
};

export default LoginForm;
