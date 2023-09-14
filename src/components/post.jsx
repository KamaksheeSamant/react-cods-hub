import { Flex, Box, xcss, Stack, Inline } from "@atlaskit/primitives";
import CodeSnippet from "./code-snippet";
import Comment from "./comment";
import Reaction from "./reaction";
import Tags from "./tags";
import PRAuthors from "./pr-authors";

const containerStyles = xcss({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "elevation.surface.raised",
  borderStyle: 'solid',
  padding: "space.200",
  margin: "space.200",
  transition: "200ms",
  borderColor: "color.border.accent.gray",
  borderRadius: "border.radius.200",
  boxShadow: "elevation.shadow.raised",
  ":hover": {
    backgroundColor: "elevation.surface.hovered",
  },
});

const ReactionsContainerStyles = xcss({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const Post = ({ post }) => {
  const { tags, comment, reactions, code, authors } = post;
  console.log("tags",post);
  return (
    <Box xcss={containerStyles}>
      <Flex>
        <Tags tags={tags} />
        <PRAuthors authors={authors} />
      </Flex>

      <Stack space="space.100">
        <Comment key={comment.id} comment={comment} />
        <CodeSnippet code={code} />
        <Inline xcss={ReactionsContainerStyles}>
          {reactions.map((reaction) => (
            <Reaction key={reaction.id} reaction={reaction} />
          ))}
        </Inline>
      </Stack>
    </Box>
  );
};

export default Post;
