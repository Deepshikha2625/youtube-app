import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./Videoitem";
/*this part is all about video list and video item*/
export default ({ videos, onVideoSelect }) => {
  
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
   
  ));

  return (
    <Grid container spacing={7}>
      {listOfVideos}
    </Grid>
  );
}
