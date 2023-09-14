import Spinner from "@atlaskit/spinner";
import { Flex, Stack } from "@atlaskit/primitives";
import PageHeader from "@atlaskit/page-header";
import { AtlassianLogo } from "@atlaskit/logo";
import Post from "../components/post";
import { useEffect, useState } from "react";
import Api from "../api";
import { styled } from "styled-components";

const PageHeaderWrapper = styled(PageHeader)`
  & div > div > div > h1 {
    color: blue;
    font-size: 24px;
  }
`;

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
    <Stack alignInline="center">
      {isLoading ? (
        <LoaderWrapper>
          <Spinner size={"xlarge"} />
        </LoaderWrapper>
      ) : (
        <>
          <AtlassianLogo appearance="brand" />
          <PageHeaderWrapper>Clean Coding Standards Hub</PageHeaderWrapper>
          {posts?.length &&
            posts.map((post) => <Post key={post.id} post={post} />)}
        </>
      )}
    </Stack>
  );
};

export default Main;
