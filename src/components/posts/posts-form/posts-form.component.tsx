import {useForm} from "react-hook-form";
import {useCreatePost} from "common/hooks/posts/useCreatePost";

interface IFormData {
  title: string;
  body: string;
}

const PostsForm = () => {
  const {register, handleSubmit} = useForm<IFormData>();
  const createPost = useCreatePost();

  const myOnSubmit = handleSubmit(( {title, body} )=>{
    createPost( {
      variables: {
        input: {
          title, body
        }
      }
    } )
  });

  return(
    <div className="posts-form">
      <form onSubmit={myOnSubmit}>
        <input type="text" {...register("title")} />
        <textarea {...register("body")} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default PostsForm;