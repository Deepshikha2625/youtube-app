import React from "react";
import { Grid, Typography} from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    
   <Grid item xs={7} style={{ display: "flex", alignItems: "center", cursor: "pointer",transform:"translate(110%,30%)"}} onClick={() => onVideoSelect(video)} >
        <img style={{margin:"-25px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b id="title1"> {video.snippet.title}-{video.snippet.channelTitle}</b>
        </Typography>
  
    </Grid>
     
      
  );
}
