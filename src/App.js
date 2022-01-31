import { Grid } from '@material-ui/core';
import React, {Component} from 'react'
import './App.css';
import {SearchBar} from './components';
import VideoDetails from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './api/youtube';

 export default class App extends Component{
   state = {
        videos:[],
        selectedVideo:null
   }

   componentDidMount(){
      
   }

   onVideoSelect = (video) =>{
       this.setState({selectedVideo:video})
   }

   handleSubmit = async (searchTerm) =>{
      const response = await youtube.get('search',{
        params:{
          part:"snippet",
          maxResults:5,
          key:"AIzaSyAD6Sod-VB5Yd_606m8DaNOn-Dxcnq9tn8",
          q:searchTerm
        }
      })
      console.log(response)

      this.setState({
         videos:response.data.items,
         selectedVideo:response.data.items[0]
      })
   }


   render() { 
     return(
      <Grid justifyContent ='center' container spacing={10}>
        <Grid item xs = {12}>
          <SearchBar onFormSubmit = {this.handleSubmit}/>
        </Grid>
        <Grid item xs = {8}>
           <VideoDetails video = {this.state.selectedVideo}/>
        </Grid>
        <Grid item xs ={4}>
           <VideoList videos = {this.state.videos} onVideoSelect={this.onVideoSelect}/>
        </Grid>
      </Grid>
     )
  }
}