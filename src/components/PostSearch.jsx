import React from 'react';

const PostSearch = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Rechercher par titre ou contenu..."
      onChange={handleChange}
    />
  );
};

export default PostSearch;
