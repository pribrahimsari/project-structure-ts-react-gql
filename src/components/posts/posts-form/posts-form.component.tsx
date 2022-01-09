import {useForm} from "react-hook-form";

interface IFormData {
  title: string;
  body: string;
}

const PostsForm = () => {
  const {register, handleSubmit} = useForm<IFormData>();

  const myOnSubmit = handleSubmit(( {title, body} )=>{
    console.log(title, body);
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