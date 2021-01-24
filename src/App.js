import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./Components";
import youtube from "./api/youtube";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default () => {
  const [videos, setVideos] = useState([]); /*[] use these because we getting in array forms*/
  const [selectedVideo, setSelectedVideo] = useState(null);

/*front page work*/
  return (
    <React.Fragment>
    <Grid container spacing={10}>
      <Grid item xs={9}>
        <Grid container spacing={6}>
          <Grid item xs={5}>
            <SearchBar onSubmit={handleSubmit} />
            <button id="searchbtn">
              search  
            </button>
          
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>  
        </Grid>
      </Grid>
    </Grid>

    <Router>
       <Switch>
         <Route path="/search/:searchTerm">        
         </Route>
         <Route path="/">
         
         </Route>
       </Switch>

     </Router>
     </React.Fragment>
  );
/*search bar work after press enter*/
  async function handleSubmit(searchTerm,inputSearch) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        key:'AIzaSyDabF-E0ANHfBkhFnPsPQobSBIMePGSNRo',/*API key*/
        q: searchTerm,inputSearch
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
}




