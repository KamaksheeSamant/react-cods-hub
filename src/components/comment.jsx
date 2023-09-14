import { Box } from "@atlaskit/primitives";
import Comment from "@atlaskit/comment";

const PostComment = ({ comment }) => {
  const { content } = comment;

  return (
    <Box as="span">
      <Comment content={content} />
    </Box>
  );
};

export default PostComment;
