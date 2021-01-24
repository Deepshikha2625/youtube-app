import React, { Component } from "react";
/*import  "./Fav";*/
import { Paper, TextField, Typography } from "@material-ui/core";
export default ({ video }) => {
  if (!video) return <h1>NO VIDEOS FOUND</h1>;  /*if  no videos found or searched*/
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
 
  return (
   /*video frame work , typography parts covers all the title subtitle,favorite heart icon which className is far fa-heart*/
    <React.Fragment>
      <Paper elevation={3} style={{ height: "70%",width:"130%"}}>
        <iframe 
          frameBorder="0"
          height="80%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
        <Typography variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}
        </Typography>

        </Paper>
        <div className="container">
            <i onClick ="Toggle()"id="btn" className="far fa-heart"></i>
      </div>
    
    <div>
      <p className="cmnts">Comments</p>
   
      <TextField style={{padding:"7px"}}
        label="Your Name" 
      />
      <textarea id="Textarea"
       placeholder="Your Comment"
      />
      <button id="commentbtn">Comment</button>
      <button id="cancelbtn">Cancel</button>
    </div>
    </React.Fragment>
  );

}

  
