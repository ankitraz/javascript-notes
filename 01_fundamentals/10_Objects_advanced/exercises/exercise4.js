const blogPost = {
    title: 'my blog',
    body: 'Hello this is the blog',
    author: 'Ankit',
    views: 23,
    // array of comments because we can have multiple comments
    comments: [{ author: 'Krishna', body: 'Nice blog.'},
               {author: 'B', body: 'Nice' },
        ],
    isLive: true
}

console.log(blogPost);