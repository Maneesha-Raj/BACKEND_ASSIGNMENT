async function fetchFilter() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        const filteredPosts = posts.filter(post => post.userId === 1);
        filteredPosts.forEach(post => console.log(post));
    } catch (error) {
        console.error('Error fetching and filtering posts:', error);
    }
}

fetchFilter();
