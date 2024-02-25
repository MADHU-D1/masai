import React, { useState } from 'react';

function SocialNetwork() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term.');
      return;
    }

    // Define the Wikipedia API URL
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${searchTerm}`;

    // Make an API call using fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setResults(data[1]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Wikipedia Search</h1>
      <input
        type="text"
        placeholder="Enter a search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <a
                href={`https://en.wikipedia.org/wiki/${result}`}
                target="_blank"
                rel="noreferrer"
              >
                {result}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialNetwork;
