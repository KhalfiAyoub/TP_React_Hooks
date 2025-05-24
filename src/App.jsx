import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import usePosts from './hooks/usePosts';
import useDebounce from './hooks/useDebounce';
import useLocalStorage from './hooks/useLocalStorage';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function AppContent() {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', '');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { isDarkMode } = useTheme();

  const { posts, loading, error } = usePosts();

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container py-4" data-theme={isDarkMode ? "dark" : "light"}>
      <header className="pb-3 mb-4 border-bottom">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-5 fw-bold">Blog</h1>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <PostSearch onSearch={handleSearchChange} initialValue={searchTerm} />
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;