import {IPost} from "common/interfaces/post.interface";
import PostsGridItem from "./posts-grid-item/posts-grid-item.component";

interface IPostsGripProps {
  posts: IPost[];
}

const PostsGrid = ({posts}:IPostsGripProps) => {
  return (
      <div className="posts-grid">
        {
          posts.map(post=>(
              <div key={post.id}>
                <PostsGridItem post={post} />
              </div>
          ))
        }
      </div>
  );
}
export default PostsGrid;