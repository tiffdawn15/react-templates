import React, { useEffect, useState, useMemo } from "react";

export default function Memoization({ children }) {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await fetch("https://draft-ep3o.onrender.com/artworks/all");
        const result = await res.json();
        setArtworks(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  // Memoize the data
  const sortedArtworks = useMemo(() => {
    return [...artworks].sort((a, b) => a.title.localeCompare(b.title));
  }, [artworks]);

  localStorage.setItem("artworks", JSON.stringify(sortedArtworks));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1> Artworks</h1>
      <ul>
        {sortedArtworks.map((artwork) => {
          return (
            <li key={artwork.id}>
              <h3>{artwork.title}</h3>
              <p>Artist: {artwork.artist_display}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

/**
 * MEMOIZATION NOTES:
 * 
 * 1) React.useMemo 
 *  - Memoizes the result of a heavy function call. Don't want it to rerun
 * const expensiveCalculation = React.useMemo(() => {
    return someHeavyFunction(data);
}, [data]); 

* 2) React.useCallback()
*   Function doesn't get re-created on every render. 
* Passing prop to child components

const handleClick = React.useCallback(() => {
    console.log("Button clicked");
}, []);


* 3)  React.memo() 
* prevents child component from re-rendering if props HAVEN'T changed. 
* const Child = React.memo(({ value }) => {
    console.log("Child rendered");
    return <div>{value}</div>;
});

* 4) React.useMemo(())
* Caching APi responses 
* const memoizedData = React.useMemo(() => fetchData(id), [id]);
 */
