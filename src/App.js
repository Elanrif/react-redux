import React from "react";
import PostForm from "./components/PostForm";
import {useSelector} from "react-redux";
import User from "./components/User";
import Post from "./components/Post";
import {isEmpty} from "./components/Utils";

const App = () => {

  const posts = useSelector((state)=> state.postReducer);
  console.log(posts)

  return (
    <div className="bg-gray-100 p-10">
      <h1 className=" text-4xl mb-3 font-black">POST-ARTICLE</h1>
      <PostForm />
      <div className="content mt-4 w-full flex space-x-3">
        <div className="post-container w-2/3">
          {!isEmpty(posts) && posts.map((post,index)=>
              <Post post={post} key={index}/>
            )}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
