import React, {useState}from "react";
import Header from "./components/Header";
import MainVideo from "./components/Mainvideo";
import SideVideos from "./components/SideVideos";
import MainVideoData from './Data/video-details.json'
import sideVideosData from './Data/videos.json'


class App extends React.Component {
    state = {
        // currentVideoIndex : [0],
        // changedVideoIndex :[1],
        allVideos : MainVideoData,
        mainVideo : MainVideoData,
        sideVideo : sideVideosData,
    }

    clickHandle = (id) =>{
        let newMainVideo = this.state.allVideos.filter(video=>
            video.id === id
        )
        return this.setState(previousState =>({
            mainVideo : newMainVideo, ...previousState.mainVideo
        }))
    
    }

    render(){
        let sideVideoList = this.state.sideVideo.filter(video=>
            video.id !== this.state.mainVideo[0].id
        )
        return(
            <div>
            <Header />
            <MainVideo currentVideo={this.state.mainVideo[0]} currentCommentsnow={this.state.mainVideo[0].comments}/>
            <SideVideos sideVideo={sideVideoList} clickHandle={this.clickHandle}/>
            </div>
        )
    }
}

export default App