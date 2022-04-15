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
        axios.get(`http://localhost:8080/videos/${currVideoId}`)
        .then(({data})=>{
            console.log('data',data)
            this.setState({
                selectedVideo : data
            })
        })
    }

    componentDidMount(){
        axios
        .get(`http://localhost:8080/videos`)
        .then (({data})=> {
            console.log('Videos: ', data);
            this.setState({
                allVideos : data
            }, this.fetchVideoDetails)
        })
    }

    postDelete = (id, e )=>{
        // let currVideoId = this.props.match.params.videoId
        // axios.delete
        console.log("hi")
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
          this.fetchVideoDetails();
        }
      }
      deleteHandler = (id) =>{
        alert(id);
    }
    
    render(){
        const filteredVideos = this.state.selectedVideo
      ? this.state.allVideos.filter(video => video.id !== this.state.selectedVideo.id)
      : this.state.allVideos;
        return(
            <>
            {this.state.selectedVideo &&
            <SelectedVideoDetails video ={this.state.selectedVideo} currentComments={this.state.selectedVideo.comments}/>}
            <VideoList allVideos={filteredVideos}  delete={this.state.postDelete}/>
            </>
        )
    }
}

export default AllVideos