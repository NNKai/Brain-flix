import axios from 'axios';
import React, { Component } from 'react';
import SelectedVideoDetails from '../SelectedVideosDetails/SelectedVideoDetails';
import VideoList from '../VideoList/VideoList';


class AllVideos extends Component {
    state = {
        allVideos : [],
        selectedVideo : null
    }

    fetchVideoDetails = () => {
        let currVideoId = this.props.match.params.videoId;

        if (!currVideoId) {
            const videoIds = this.state.allVideos.map(singleVideo => singleVideo.id);
            const randomIndex = Math.floor(Math.random() * videoIds.length)
            currVideoId = videoIds[randomIndex];
        }
        axios.get(`https://project-2-api.herokuapp.com/videos/${currVideoId}?api_key=5af112cd-f72d-470b-b562-c8e7058a1616`)
        .then(({data})=>{
            console.log(data)
            this.setState({
                selectedVideo : data
            })
        })
    }

    componentDidMount(){
        axios
        .get(`https://project-2-api.herokuapp.com/videos/?api_key=5af112cd-f72d-470b-b562-c8e7058a1616`)
        .then (({data})=> {
            console.log('Videos: ', data);
            this.setState({
                allVideos : data
            }, this.fetchVideoDetails)
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
          this.fetchVideoDetails();
        }
      }

    render(){
        const filteredVideos = this.state.selectedVideo
      ? this.state.allVideos.filter(video => video.id !== this.state.selectedVideo.id)
      : this.state.allVideos;
        return(
            <>
            {this.state.selectedVideo &&
            <SelectedVideoDetails video ={this.state.selectedVideo} currentComments={this.state.selectedVideo.comments}/>}
            <VideoList allVideos={filteredVideos}/>
            </>
        )
    }
}

export default AllVideos