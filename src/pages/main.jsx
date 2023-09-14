import Spinner from "@atlaskit/spinner";
import Post from "../components/post";
import { useEffect, useState } from "react";
import Api from "../api";
import { styled } from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
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
      {isLoading  ? (
        <LoaderWrapper>
          <Spinner size={"xlarge"} />
        </LoaderWrapper>
      ) : (
        <>
          {posts?.length &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </>
      )}
    </div>
  );
};

export default Main;
