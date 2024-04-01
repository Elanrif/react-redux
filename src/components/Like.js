import React from "react";

const Like = ({ post }) => {
  return (
    <div className="flex items-center">
      <img src="./icons/clap.png" className="clap hover:cursor-pointer duration-300 ease-in-out text-end" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
