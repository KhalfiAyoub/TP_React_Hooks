import React, { useMemo } from 'react';

function PostList({ posts }) {
  const formattedPosts = useMemo(() => {
    return posts.map(post => ({
      ...post,
      date: new Date().toLocaleDateString()
    }));
  }, [posts]);

  return (
    <div className="post-list">
      {formattedPosts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

const PostItem = React.memo(({ post }) => {
  return (
    <div className={`post-item ${post.isFeatured ? 'featured' : ''}`}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="post-tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
});

export default PostList;