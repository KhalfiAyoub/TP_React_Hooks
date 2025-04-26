import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import usePosts from './hooks/usePosts';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { posts, loading, error } = usePosts();
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold">Blog</h1>
        </div>
      </header>

      <main>
        <PostSearch onSearch={handleSearchChange} />
        <PostList posts={filteredPosts} loading={loading} error={error} />
      </main>

      <footer className="pt-3 mt-4 text-center border-top">
        <p>
          TP React Hooks - Blog &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
