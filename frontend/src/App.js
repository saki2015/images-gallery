import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [word, setWord] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // prevent reloading of page which clears out event
    // details from console
    // console.log(e); // by inspecting the event in the console, we know
    // how to get value of the input field (as in next line)
    //console.log(e.target[0].value);
    console.log(word); // after word is defined, one can use that instaed of e.target[0].value to get user input in the search field
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
