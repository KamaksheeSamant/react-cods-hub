import { Box, xcss } from "@atlaskit/primitives";
import Heading from "@atlaskit/heading";
import Comment from "@atlaskit/comment";
import { styled } from "styled-components";

const CommentTitle = styled.span`
  text-decoration: underline;
`;

const headingStyles = xcss({
  marginBlock: "space.050",
});

const PostComment = ({ comment }) => {
  const { content } = comment;

  return (
    <Box as="span">
      <Comment
        content={
          <>
            <Heading level="h500" xcss={headingStyles}>
              <span><CommentTitle>PR Comment</CommentTitle>: </span>
                {content}
            </Heading>
          </>
        }
      />
    </Box>
  );
};

export default PostComment;
