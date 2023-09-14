// TODO: add actual API
const Posts = async () => {
    // TODO: remove this delay later
    await new Promise(resolve => setTimeout(resolve, 3000));
    const data = [
        {
            beforeCommitId: 1,
            beforeCommitCode: "private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {\n" +
                "  return  questionIds.stream()\n" +
                "          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))\n" +
                "          .collect(Collectors.toList());\n" +
                "}",
            afterCommitCode: "private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {\n" +
                "  return  questionIds.stream()\n" +
                "          .filter(questionId -> !questionOverrides.contains(questionId))\n" +
                "          .collect(Collectors.toList());\n" +
                "}",
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
            sourceLanguage: "Java"
        },
        {
            beforeCommitId: 11,
            beforeCommitCode: "for i, comment := range comments {\n" +
                "\t\tvar userMeta *db.AtlassianOrgUser\n" +
                "\t\tuser, exist := usersLookup[comment.UserID]" +
                "if !exist {\n" +
                "\t\t\tfor y, userCache := range usersCache {\n" +
                "\t\t\t\tif userCache.UserID == comment.UserID {\n" +
                "\t\t\t\t\tusersLookup[comment.UserID] = userCache\n" +
                "\t\t\t\t\tuserMeta = &usersCache[y]\n" +
                "\t\t\t\t\tbreak\n" +
                "\t\t\t\t}\n" +
                "\t\t\t}\n" +
                "\t\t} else {\n" +
                "\t\t\tuserMeta = &user\n" +
                "\t\t}\n" +
                "\t\tcommentsMeta[i] = reportCommentMeta{\n" +
                "\t\t\tReportComment: comment,\n" +
                "\t\t\tUserMeta:      userMeta,\n" +
                "\t\t}\n" +
                "\t}",
            afterCommitCode: "for i, comment := range comments {\n" +
                "\t\tvar userMeta *db.AtlassianOrgUser\n" +
                "\t\tuser, exist := usersLookup[comment.UserID]" +
                "if !exist {\n" +
                "\t\t\tfor y, userCache := range usersCache {\n" +
                "\t\t\t\tif userCache.UserID == comment.UserID {\n" +
                "\t\t\t\t\tusersLookup[comment.UserID] = userCache\n" +
                "\t\t\t\t\tuserMeta = &usersCache[y]\n" +
                "\t\t\t\t\tbreak\n" +
                "\t\t\t\t}\n" +
                "\t\t\t}\n" +
                "\t\t} else {\n" +
                "\t\t\tuserMeta = &user\n" +
                "\t\t}\n" +
                "\t\tcommentsMeta[i] = reportCommentMeta{\n" +
                "\t\t\tReportComment: comment,\n" +
                "\t\t\tUserMeta:      userMeta,\n" +
                "\t\t}\n" +
                "\t}",
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
            sourceLanguage: "go"
        },
        {
            beforeCommitId: 12,
            beforeCommitCode: "numberOfSyncedRepos === totalNumberOfRepos \n" +
                "  ? totalNumberOfRepos \n" +
                "  : (totalNumberOfRepos ? `${numberOfSyncedRepos} / ${totalNumberOfRepos}` : \"\");",
            afterCommitCode: "if (!totalNumberOfRepos) return \"\";// If the total number of repos is 0, then show nothing\n" +
                "if (numberOfSyncedRepos === totalNumberOfRepos) {\n" +
                "  return totalNumberOfRepos;\n" +
                "} else {\n" +
                "  return `${numberOfSyncedRepos} / ${totalNumberOfRepos}`;\n" +
                "}",
            afterCommitId: 22,
            commentId: 12,
            beforeLineNum: "1,2,3",
            prId: 12,
            afterLineNum: "1,2,3,4,5,6",
            prAuthor: ["PR Author 2"],
            commentAuthor: ["Comment Author 2"],
            codsUUId: "abcd-123-xyz2",
            codsCreationDate: 1231232,
            repositoryId: 122132,
            sourceLanguage: "javascript"
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
                codeSnippet: datum.beforeCommitCode
            },
            after: {
                id: datum.afterCommitId,
                highlightedLines: datum.afterLineNum,
                codeSnippet: datum.afterCommitCode
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