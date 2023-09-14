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
                tags.map((tag, index) =>
                    <span key={index}>{tag}</span>
                )
            }
            <CodeSnippet code={code} />
            {
                comments.map(comment => <Comment key={comment.id} comment={comment} />)
            }

            {
                reactions.map(reaction => <Reaction key={reaction.id} reaction={reaction} />)
            }
        </div>
    );
};

export default Post;