import React from 'react';

export default function Controls({ query, setQuery }) {
  return (
    <div>
      <input
        placeholder="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
