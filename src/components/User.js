import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="user-container relative  size-[20rem]  p-4  ">
      <div className="user p-4 border fixed border-black flex flex-col items-center gap-2">
        <h3>{user?.pseudo}</h3>
        <img
          src="./img/bill-gates.png"
          alt="bill gates"
          className="rounded-full size-[5rem]"
        />
        <p>Age : {user?.age} ans</p>
        <p>
          Like{user?.like > 1 && "s"} : {user?.likes}
        </p>
      </div>
    </div>
  );
};

export default User;
