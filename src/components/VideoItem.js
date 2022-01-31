import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const VideoItem = (props) =>{
    const {video,onVideoSelect} = props
    console.log(video)
    return (
        <Grid item xs = {12}>
            <Paper style = {{display:"flex",alignItems:"center",cursor:"pointer"}} onClick={() => onVideoSelect(video)}>
              <img style={{marginRight:"20px"}} alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
              <Typography variant="subtitle1"><b> {video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem 