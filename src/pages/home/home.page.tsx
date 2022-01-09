import PostsGrid from "../../components/posts-grid/posts-grid.component";
import {IPost} from "../../common/interfaces/post.interface";
import {useGetPosts} from "../../common/hooks/posts/useGetPosts";

const Home = () => {
    const posts = useGetPosts();

    return(
        <div className="home">
            <PostsGrid posts={posts || []} />
        </div>
    );
}
export default Home;