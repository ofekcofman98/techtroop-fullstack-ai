// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data

  try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) {
            throw new Error(`User ${userId} not found`);
        }
        const user = await userResponse.json();
      
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!postsResponse.ok) {
            throw new Error(`Failed to fetch posts for user ${userId}`);
        }
        const posts = await postsResponse.json()

        return {
            userInfo: user,
            posts: posts
        };
    }
    catch (error) {
        console.error('Error in getUserWithPosts:', error.message);
        return null;
    }
}

async function runTests() {
    const user1 = await getUserWithPosts(1);
    console.log(user1);

    const user999 = await getUserWithPosts(999);
    console.log(user999);
}

runTests();