import PostsGrid from "components/posts/posts-grid/posts-grid.component";
import {useGetPosts} from "common/hooks/posts/useGetPosts";

const Home = () => {
    const posts = useGetPosts();

    return(
        <div className="home">
            <PostsGrid posts={posts || []} />
        </div>
    );
}
export default Home;