// TODO: add actual API
const Posts = async () => {
    // TODO: remove this delay later
    await new Promise(resolve => setTimeout(resolve, 3000));
    const data = [
        {
            beforeCommitId: 1,
            afterCommitId: 2,
            commentId: 1,
            beforeLineNum: "2,5",
            prId: 1,
            afterLineNum: "2,5",
            prAuthor: ["PR Author"],
            commentAuthor: ["Comment Author"],
            codsUUId: "abcd-123-xyz",
            codsCreationDate: 123123,
            repositoryId: 12213,
            sourceLanguage: "javascript"
        },
        {
            beforeCommitId: 11,
            afterCommitId: 21,
            commentId: 11,
            beforeLineNum: "1,3",
            prId: 11,
            afterLineNum: "1,3",
            prAuthor: ["PR Author 1"],
            commentAuthor: ["Comment Author 1"],
            codsUUId: "abcd-123-xyz1",
            codsCreationDate: 1231231,
            repositoryId: 122131,
            sourceLanguage: "python"
        },
        {
            beforeCommitId: 12,
            afterCommitId: 22,
            commentId: 12,
            beforeLineNum: "4",
            prId: 12,
            afterLineNum: "4",
            prAuthor: ["PR Author 2"],
            commentAuthor: ["Comment Author 2"],
            codsUUId: "abcd-123-xyz2",
            codsCreationDate: 1231232,
            repositoryId: 122132,
            sourceLanguage: "go"
        }
    ];

    return modifyResponse(data);
};

const modifyResponse = (data) => {
    return data.map(datum => ({
        code: {
            before: {
                id: datum.beforeCommitId,
                highlightedLines: datum.beforeLineNum,
                codeSnippet: "private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {\n" +
                    "  return  questionIds.stream()\n" +
                    "          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))\n" +
                    "          .collect(Collectors.toList());\n" +
                    "}"
            },
            after: {
                id: datum.afterCommitId,
                highlightedLines: datum.afterLineNum,
                codeSnippet: "private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {\n" +
                    "  return  questionIds.stream()\n" +
                    "          .filter(questionId -> !questionOverrides.contains(questionId))\n" +
                    "          .collect(Collectors.toList());\n" +
                    "}"
            }
        },
        comment: {
            id: datum.commentId,
            content: "PR Comment: The code snippet provided is functional but has a potential performance issue due to nested iterations. This can result in a time complexity of O(n * m). Can we improve this to O(N+M) if we use set here for itemOverrides?"
        },
        authors: [ ...datum.prAuthor, ...datum.commentAuthor],
        tags: [ datum.sourceLanguage ],
        reactions: [
            {
                id: 1,
                title: "like",
                quantity: 3
            },
            {
                id: 2,
                title: "dislike",
                quantity: 0
            },
            {
                id: 3,
                title: "discard",
                quantity: 0
            },
            {
                id: 4,
                title: "discuss",
                quantity: 2
            }
        ]
    }));
};

export default Posts;