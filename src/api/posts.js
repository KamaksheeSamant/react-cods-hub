// TODO: add actual API
const Posts = async () => {
    // TODO: remove this delay later
    await new Promise(resolve => setTimeout(resolve, 3000));

    return {
        data: [
            {
                id: 1,
                title: "First Post",
                code: {
                    before: "Before Code",
                    after: "After Code",
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
                        icon: "like",
                        quantity: 3
                    },
                    {
                        id: 2,
                        icon: "dislike",
                        quantity: 0
                    }
                ]
            },
            {
                id: 2,
                title: "Second Post",
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
                        icon: "like",
                        quantity: 0
                    },
                    {
                        id: 2,
                        icon: "dislike",
                        quantity: 4
                    }
                ]
            }
        ]
    };
};

export default Posts;