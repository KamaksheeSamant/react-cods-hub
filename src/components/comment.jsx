
const Comment = ({ comment }) => {
    const { id, content } = comment;
    return (
        <>
            <div>ID: {id}</div>
            <div>Content: {content}</div>
        </>
    )
};

export default Comment;