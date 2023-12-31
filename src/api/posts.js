import axios from "axios";

const URL =
  "https://b9cga2q1z9.execute-api.ap-southeast-2.amazonaws.com/staging/cods";

// TODO: Get actual code data later
const getCode = (language, isBefore) => {
  switch (language) {
    case "java":
      return isBefore
        ? "private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {\n" +
            "  return  questionIds.stream()\n" +
            "          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))\n" +
            "          .collect(Collectors.toList());\n" +
            "}"
        : "private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {\n" +
            "  return  questionIds.stream()\n" +
            "          .filter(questionId -> !questionOverrides.contains(questionId))\n" +
            "          .collect(Collectors.toList());\n" +
            "}";
    case "java,junit":
      return isBefore ?
          "@Before\n" +
          "    public void setup() {\n" +
          "        issueCommentedTriggerExecutor = new IssueCommentedTriggerExecutor(issueEventMatcher,\n" +
          "                componentIssueResolver,\n" +
          "                smartIssueInputPopulator,\n" +
          "                tenantService);\n" +
          "    }" :
          "  @InjectMocks\n" +
          "    private IssueCommentedTriggerExecutor issueCommentedTriggerExecutor;\n";
    case "python":
      return isBefore
        ? "for i, comment := range comments {\n" +
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
            "\t}"
        : "for i, comment := range comments {\n" +
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
    case "node":
      return isBefore
        ? "numberOfSyncedRepos === totalNumberOfRepos \n" +
            "  ? totalNumberOfRepos \n" +
            '  : (totalNumberOfRepos ? `${numberOfSyncedRepos} / ${totalNumberOfRepos}` : "");:'
        : 'if (!totalNumberOfRepos) return "";// If the total number of repos is 0, then show nothing\n' +
            "if (numberOfSyncedRepos === totalNumberOfRepos) {\n" +
            "  return totalNumberOfRepos;\n" +
            "} else {\n" +
            "  return `${numberOfSyncedRepos} / ${totalNumberOfRepos}`;\n" +
            "}";
  }
};

const getComment = (language) => {
  switch (language) {
    case "java,junit":
      return "/suggestion You can define this and just use @InjectMocks with the existing runner";
    default:
      return "The code snippet provided is functional but has a potential performance issue due to nested iterations. This can result in a time complexity of O(n * m). Can we improve this to O(N+M) if we use set here for itemOverrides?";
  }
}

const Posts = async () => {
  try {
    const response = await axios.get(URL);
    console.log(JSON.parse(response.data.body));
    return modifyResponse(JSON.parse(response.data.body));
  } catch (e) {
    throw e;
  }
};


const modifyResponse = (data) => {
  return data.map((datum) => ({
    code: {
      before: {
        id: datum.beforeCommitId,
        highlightedLines: datum.beforeLineNum,
        codeSnippet: getCode(datum.sourceLangauage, true),
      },
      after: {
        id: datum.afterCommitId,
        highlightedLines: datum.afterLineNum,
        codeSnippet: getCode(datum.sourceLangauage),
      },
    },
    comment: {
      id: datum.commentId,
      content: getComment(datum.sourceLangauage)
    },
    prInfo: [
      { title: "PR: ", value: `${datum.repositoryId} - ${datum.prId}` },
      { title: "PR Author: ", value: datum.prAuthor },
      { title: "Comment Author: ", value: datum.commentAuthor },
    ],
    tags: datum.sourceLangauage.split(","),
    reactions: [
      {
        id: 1,
        title: "like",
        quantity: 3,
      },
      {
        id: 2,
        title: "dislike",
        quantity: 0,
      },
      {
        id: 3,
        title: "discard",
      },
      {
        id: 4,
        title: "discuss",
        quantity: 2,
      },
    ],
  }));
};

export default Posts;
