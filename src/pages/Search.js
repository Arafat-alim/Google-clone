import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";

function Search({ hideButton = false }) {
  // creating a state
  const [text, setText] = useState("");
  const history = useHistory();
  const [{ term = "Tesla" }, dispatch] = useStateValue();

  //function call
  function search(e) {
    e.preventDefault();
    console.log("You Typed", text);
    //do with the input
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: text,
    });
    history.push("/search");
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Google or Type URL"
        />
        <MicIcon />
      </div>
      {!hideButton ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
