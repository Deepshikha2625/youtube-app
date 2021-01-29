import React, { useState } from "react";
import { Link,Router } from "react-router-dom";
import { Paper } from "@material-ui/core";

export default ({ onSubmit }) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  /*const [inputSearch, setInputSearch] = useState("");*/
  function handleChange(event) {
    return setSearchTerm(event.target.value);
  }
 
  function onKeyPress(event) {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }

  }

  
  return (
    <React.Fragment>
    <Paper elevation={8} style={{width:"355%",height:"90%" }}>
      <input
       placeholder="search"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={onKeyPress}   
     />
    </Paper>
    </React.Fragment>
  
  );
}