import { Grid } from '@material-ui/core'
import React from 'react'
import VideoItem from './VideoItem'


const VideoList = (props) => {
    const {videos,onVideoSelect} = props
    console.log(onVideoSelect)
    const listofVideos = videos.map((video,id) => <VideoItem onVideoSelect = {onVideoSelect} key = {id} video={video}/> )
    return(
       <Grid container spacing={10}>
            {listofVideos}
       </Grid>
    )
}

export default VideoList