async function getDashboardData(userId) {
    try {
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        if (!usersResponse || !postsResponse || !commentsResponse) {
            throw new Error("Failed to fetch dashboard data");
        }

        const [users, posts, comments] = await Promise.all([
            usersResponse.json(),
            postsResponse.json(),
            commentsResponse.json()
        ]);

        const totalUser = users.length;
        const totalPosts = posts.length;
        const totalComments = comments.length;

        const avgPostsPerUser = totalPosts / totalUser;
        const avgCommentsPerUser = totalComments / totalUser;

        const usersDetails = users.map(user => {
            const userPosts = posts.filter(post => post.userId === user.id);
            const postIds = userPosts.map(post => post.id)
            
            const commentCount = comments.filter(comment => postIds.includes(comment.postId)).length;
        
            return {
                name: user.name,
                postCount: userPosts.length,
                commentCount: commentCount
            };
        });

        const topUsers = usersDetails
            .sort((a,b) => b.postCount - a.postCount)
            .slice(0,3);
        
        const recentPosts = usersDetails
            .sort((a,b) => b.id - a.id)
            .slice(0,5);

        return {
            summary: {
                totalUser,
                totalPosts,
                totalComments,
                avgPostsPerUser,
                avgCommentsPerUser,
            },
            topUsers,
            recentPosts
        };
    }
    catch (error) {
        console.error("Dashboard Error:", error.message);
        return null;
    }
}

async function runDashboard() {
    console.log("Dashboard:");
    const dashboard = await getDashboardData();
    
    console.log(JSON.stringify(dashboard, null, 2)); 
}

runDashboard();