import axios from "axios";

const URL = "https://b9cga2q1z9.execute-api.ap-southeast-2.amazonaws.com/staging/cods";

// TODO: Get actual code data later
const getCode = (language, isBefore) => {
    switch (language) {
        case "java":
            return isBefore ?
                "private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {\n" +
                "  return  questionIds.stream()\n" +
                "          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))\n" +
                "          .collect(Collectors.toList());\n" +
                "}" :
                "private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {\n" +
                "  return  questionIds.stream()\n" +
                "          .filter(questionId -> !questionOverrides.contains(questionId))\n" +
                "          .collect(Collectors.toList());\n" +
                "}";
        case "python":
            return isBefore ?
                "for i, comment := range comments {\n" +
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
                "\t}" :
                "for i, comment := range comments {\n" +
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
                "\t}";
        case "ruby":
            return isBefore ? "before" : "after";
        case "c#":
            return isBefore ? "before" : "after";
        case "javascript":
            return isBefore ?
                "numberOfSyncedRepos === totalNumberOfRepos \n" +
                "  ? totalNumberOfRepos \n" +
                "  : (totalNumberOfRepos ? `${numberOfSyncedRepos} / ${totalNumberOfRepos}` : \"\");:" :
                "if (!totalNumberOfRepos) return \"\";// If the total number of repos is 0, then show nothing\n" +
                "if (numberOfSyncedRepos === totalNumberOfRepos) {\n" +
                "  return totalNumberOfRepos;\n" +
                "} else {\n" +
                "  return `${numberOfSyncedRepos} / ${totalNumberOfRepos}`;\n" +
                "}";

    }
}

const Posts = async () => {
    try {
        const response = await axios.get(URL);
        return modifyResponse(JSON.parse(response.data.body));
    } catch (e) {
       throw e;
    }
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
        authors: [ datum.prAuthor, ...datum.commentAuthor],
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