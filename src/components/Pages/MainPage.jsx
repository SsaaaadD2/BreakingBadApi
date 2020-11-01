import React, {useState, useEffect, Fragment} from "react";
import Search from "../UI/Search";
import CharacterGrid from "../Characters/CharacterGrid";
import axios from "axios";

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <Fragment>
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </Fragment>
  );
};

export default MainPage;
