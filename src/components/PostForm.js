import React, { useRef } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addPost, getPosts } from "../actions/post.action";

const PostForm = () => {

  const form = useRef()
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()


  const handleForm = async(e)=>{
      e.preventDefault();

      console.log(form)

      const postData = {
        author : user.pseudo,
        title : form.current[0].value,
        content : form.current[1].value,
        likes : 0,
      }

      await dispatch(addPost(postData)) ;
      dispatch(getPosts()) ;
      form.current.reset();
  }
  return (
    <div className="form-container max-w-lg border border-black p-5">
      <form ref={form} onSubmit={(e) =>handleForm(e)} className="flex flex-col gap-3">
        <input type="text" placeholder="Titre du poste"  className="border border-slate-300 p-3"/>
        <textarea placeholder="Postez vos pensées..." className="border border-slate-300 p-3"></textarea>
        <input type="submit" value="Envoyer" className="px-3 hover:cursor-pointer py-2 w-3/12  bg-green-700  text-white"/>
      </form>
    </div>
  );
};

export default PostForm;
