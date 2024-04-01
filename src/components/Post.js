import React, { useState } from "react";
import Like from "./Like";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty } from "./Utils";
import { deletePost, editPost } from "../actions/post.action";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);

  const user = useSelector((state)=> state.userReducer)

  const [editContent,setEditContent] = useState(post.content)

  const dispatch = useDispatch() 

  const handleEdit = (e)=>{
      e.preventDefault();

      const postData = {
        title : post.title,
        author : user.pseudo,
        likes : post.likes,
        id  : post.id,
        content : editContent
      }

      dispatch(editPost(postData));
      setEditToggle(false);

  }


  return (
    <div className="post flex flex-col gap-3 border p-5 border-black mt-4">
      {!isEmpty(user) && user.pseudo === post.author && (
        <div className="edit-delete justify-end flex space-x-2">
          <img
            className="size-[1.5rem] hover:cursor-pointer hover:scale-120 hover:size-[2rem] hover:text-blue-500 duration-300 ease-in-out"
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(!editToggle)}
          />
          <img
            className="size-[1.5rem] hover:cursor-pointer hover:scale-120 hover:size-[2rem] hover:text-blue-500 duration-300 ease-in-out"
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => dispatch(deletePost(post.id))}
          />
        </div>
      )}

      <h2 className="text-xl font-black">{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)} className="flex flex-col gap-3">
          <textarea
            className="max-w-lg border border-black focus:border-slate-100 px-3 py-1"
            autoFocus={true}
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <input
            type="submit"
            value="Valider modification"
            className="px-3 hover:cursor-pointer py-2 w-3/12  bg-green-700  text-white"
          />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author border-black flex space-x-2 justify-end">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
