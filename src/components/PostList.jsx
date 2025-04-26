import React from 'react';

const PostList = ({ posts, loading, error }) => {
  if (loading) return <p>Chargement des posts...</p>;
  if (error) return <p>{error}</p>;
  if (!posts || posts.length === 0) return <p>Aucun post trouvé.</p>;

  return (
    <div className="list-group">
      {posts.map(post => (
        <div key={post.id} className="list-group-item">
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
