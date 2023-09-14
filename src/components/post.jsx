import CodeSnippet from "./code-snippet";
import Comment from "./comment";
import Reactions from "./reactions";

const Post = () => {
    return (
        <div>
            <div>Tags here</div>
            <CodeSnippet />
            <Comment />
            <Reactions />
        </div>
    )
};

export default Post;