// TODO: add actual API
const Posts = async () => {
    // TODO: remove this delay later
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        data: [
            {
                id: 1,
                title: "First Post",
                prAuthor: "XYZ ABC",
                commentAuthor: "ABC XYZ",
                code: {
                    before: "private List<String> filterQuestionId(List<String> questionIds, List<String> questionOverrides) {\n" +
                        "  return  questionIds.stream()\n" +
                        "          .filter(questionId -> questionOverrides.stream().noneMatch(questionOverride -> questionId.equals(questionOverride))\n" +
                        "          .collect(Collectors.toList());\n" +
                        "}",
                    after: "private List<String> filterQuestionId(List<String> questionIds, Set<String> questionOverrides) {\n" +
                        "  return  questionIds.stream()\n" +
                        "          .filter(questionId -> !questionOverrides.contains(questionId))\n" +
                        "          .collect(Collectors.toList());\n" +
                        "}",
                },
                tags: [ "tag-1", "tag-2", "tag-3" ],
                comments: [
                    {
                        id: 1,
                        content: "PR Comment: The code snippet provided is functional but has a potential performance issue due to nested iterations. This can result in a time complexity of O(n * m). Can we improve this to O(N+M) if we use set here for itemOverrides?"
                    }
                ],
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
                    }
                ]
            },
            {
                id: 2,
                title: "Second Post",
                prAuthor: "XYZ ABC",
                commentAuthor: "ABC XYZ",
                code: {
                    before: "Before Code 2",
                    after: "After Code 2",
                },
                tags: [ "tag-1", "tag-2", "tag-3" ],
                comments: [
                    {
                        id: 1,
                        content: "PR Comment: The code snippet provided is functional but has a potential performance issue due to nested iterations. This can result in a time complexity of O(n * m). Can we improve this to O(N+M) if we use set here for itemOverrides?"
                    }
                ],
                reactions: [
                    {
                        id: 1,
                        title: "like",
                        quantity: 0
                    },
                    {
                        id: 2,
                        title: "dislike",
                        quantity: 4
                    },
                    {
                        id: 3,
                        title: "discard",
                        quantity: 0
                    },
                    {
                        id: 4,
                        title: "discuss",
                        quantity: 1
                    }
                ]
            }
        ]
    };
};

export default Posts;