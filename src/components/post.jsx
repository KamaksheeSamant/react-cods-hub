import { Flex, Box, xcss, Stack, Inline } from "@atlaskit/primitives";

import CodeSnippet from "./code-snippet";
import Comment from "./comment";
import Reaction from "./reaction";
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

const ReactionsContainerStyles = xcss({
    display: "flex",
    alignItems: "center",
    width: "100%",
});

const Post = ({ post }) => {
    const { tags, comments, reactions, code } = post;
    return (
        <Box xcss={containerStyles}>
            <Flex>
                <Tags tags={tags} />
            </Flex>

            <Stack space="space.100">
                <CodeSnippet code={code} />

                {
                    comments.map( comment =>
                        <Comment key={comment.id} comment={comment} />
                    )
                }

                <Inline xcss={ReactionsContainerStyles}>
                    {
                        reactions.map( reaction =>
                            <Reaction key={reaction.id} reaction={reaction} />
                        )
                    }
                </Inline>
            </Stack>
        </Box>
    );
};

export default Post;