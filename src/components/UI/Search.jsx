import React, {useState} from "react";

const Search = ({getQuery}) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);

    //The query parameter in App.jsx is passed in here
    getQuery(e.target.value);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={input}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
