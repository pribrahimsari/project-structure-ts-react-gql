import {IPost} from "common/interfaces/post.interface";


const PostsGridItem = ({post}:{post:IPost}) => {
    return (
        <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}
export default PostsGridItem;