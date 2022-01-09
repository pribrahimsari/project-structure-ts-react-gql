import PostsGrid from "../../components/posts-grid/posts-grid.component";
import {IPost} from "../../common/interfaces/post.interface";

const Home = () => {
    const posts:IPost[] = [
        {
            id: "1",
            title: "Post One",
            body: "Body of my post one"
        },
        {
            id: "2",
            title: "Post Two",
            body: "Body of my post two"
        },
        {
            id: "3",
            title: "Post Three",
            body: "Body of my post three"
        },
    ];

    return(
        <div className="home">
            <PostsGrid posts={posts} />
        </div>
    );
}
export default Home;