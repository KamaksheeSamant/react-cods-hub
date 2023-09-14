const CodeSnippet = ({ code }) => {
    return (
        <div>
            <div>
                <div>Before</div>
                <div>{code.before}</div>
            </div>

            <div>
                <div>After</div>
                <div>{code.after}</div>
            </div>
        </div>
    )
};

export default CodeSnippet;