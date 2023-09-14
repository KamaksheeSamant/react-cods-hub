import CodeSnippet from "./code-snippet";
import Comment from "./comment";
import Reaction from "./reaction";

// TODO: change this styling later
const PostWrapper = ({
    padding: 14,
    margin: 8,
    border: "1px solid black",
});

const Post = ({ post }) => {
    const { tags, code, comments, reactions } = post;
    return (
        <div style={PostWrapper}>
            {
                tags.map(tag =>
                    <span>{tag}</span>
                )
            }
            <CodeSnippet code={code} />
            {
                comments.map(comment => <Comment comment={comment} />)
            }

            {
                reactions.map(reaction => <Reaction reaction={reaction} />)
            }
        </div>
    );
};

export default Post;