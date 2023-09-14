import Post from "../components/post";
import { useEffect, useState } from "react";
import Api from "../api";

const Main = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const posts = await Api.posts();
            setPosts(posts);
        } catch (e) {
            console.error("Error when fetching posts", e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
      fetchPosts();
    }, []);

    return (
        <div>
            {
                isLoading ?
                    <div>Loading</div> :
                    <>
                        {
                            posts?.length && posts.map( post =>
                                <Post key={post.id} post={post}/> )
                        }
                    </>
            }
        </div>
    );
};

export default Main;