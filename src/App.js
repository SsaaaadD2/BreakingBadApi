import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/UI/Search";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      //console.log(result);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      {/* The query parameter is passed in from Search when the function is called */}
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
