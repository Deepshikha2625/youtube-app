import React from "react";


function Fav() {
  const btn =document.getElementById('btn');

  return(
  function Toggle() {
   

  if (btn.classList.contains("far")){
    btn.classList.remove("far");
    btn.classList.add("fas");
  }else{
   btn.classList.remove("fas");
    btn.classList.add("far");
  }
 }
 )
}

export default Fav;