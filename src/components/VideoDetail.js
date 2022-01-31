import React from "react";

import {Paper,Typography} from '@material-ui/core'

const VideoDetails = (props) => {
    const {video} = props
    if(!video) return <div>Loading!!</div>
    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
  //  console.log(videosrc)
     return(
         <>                                       
           <Paper elevation={6} style = {{height:"70%"}}>
                  <iframe src={videosrc} height="100%" width="100%" title = "VideoTitle"></iframe>
           </Paper>
           <Paper elevation={6} style = {{padding:"15px"}}>
                 <Typography variant="subtitle1">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                 <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
         </>
     )
}

export default VideoDetails