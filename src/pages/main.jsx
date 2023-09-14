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
            setPosts(posts.data);
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
                        <div>This is the main page.</div>
                        <div>Here are the posts:</div>
                        {
                            posts && posts.length && posts.map( post =>
                                <Post post={post}/> )
                        }
                    </>
            }
        </div>
    );
};

export default Main;