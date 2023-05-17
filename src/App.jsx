import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (searchTermData) => {
    console.log(`do a search with ${searchTermData}`);
    const results = await searchImages(searchTermData);
    console.log(results);
    setImages(results);
  };

  return (
    <div>
      <h2>This is My App</h2>
      <SearchBar onSearchSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
