import { Box, xcss, Stack } from "@atlaskit/primitives";

import CodeSnippet from "./code-snippet";
import Comment from "./comment";
import Reactions from "./reactions";
import Tags from "./tags";

const containerStyles = xcss({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "elevation.surface.raised",
  padding: "space.150",
  margin: "space.1000",
  transition: "200ms",
  borderRadius: "border.radius.100",
  boxShadow: "elevation.shadow.raised",
  ":hover": {
    backgroundColor: "elevation.surface.hovered",
  },
});
const Post = () => {
  return (
    <Box xcss={containerStyles}>
      <Tags />
      <Stack space="space.100">
        <CodeSnippet />
        <Comment />
        <Reactions />
      </Stack>
    </Box>
  );
};

export default Post;
