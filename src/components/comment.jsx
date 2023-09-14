import { Box } from "@atlaskit/primitives";
import Comment from "@atlaskit/comment";
import Heading from "@atlaskit/heading";

const Comments = () => {
  return (
    <Box as="span">
      <Comment
        content={
          <>
            <Heading level="h300">PR Comment:</Heading>
            The code snippet provided is functional but has a potential
            performance issue due to nested iterations. This can result in a
            time complexity of O(n * m). Can we improve this to O(N+M) if we use
            set here for itemOverrides?
          </>
        }
      ></Comment>
    </Box>
  );
};

export default Comments;
