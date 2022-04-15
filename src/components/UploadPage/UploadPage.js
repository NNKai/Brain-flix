import React, { Component }  from 'react'
import thumbnailVideo from '../../3.0 - Assets/Images/Upload-video-preview.jpg'
import './uploadPage.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:8080/videos'


class UploadPage extends Component {


    submitHandler = (event) => {
        event.preventDefault()
        console.log('hi')
        const title = event.target.title.value;
        const description = event.target.description.value;
        const image = thumbnailVideo;
        
        const channel = "My Channel";
        const timestamp = Date.now();
        const comments = [{
            "name" : "nav",
            "comment" : "Skiing is a lifestyle! This may be hard to believe now, but I once competed here for the World Cup. The Alps are at their most beautiful when you’re shredding down them FAST.",
            "likes" : "0",
            "timestamp" : timestamp,
        }];
        const views = "0";
        const likes = "1,000"
        axios.post("http://localhost:8080/videos", {

        title, 
        description,
        image,
        comments,
        channel,
        timestamp,
        views,
        likes})
        .then(res=>{
            console.log(res)
            event.target.reset();
            <Redirect to={'/'}/>
        })
        .catch(error=>{
            console.log(error)
        })
    }


        render(){
            
        return(
            <div className='upload-container'>
                <div className='upload-h1'>
                <h1>Upload Video</h1>
                </div>
                <div className='upload-page'>
                <div className='upload-img'>
                    <h2>VIDEO THUMBNAIL</h2>
                    <img src={thumbnailVideo}></img>
                </div>
               
                <form className='uploadpage-Form' onSubmit={this.submitHandler}>
                    <div className='form-inputs'>
                <label>TITLE YOUR VIDEO</label><br></br>
                <input type='text' id='name' name='title' placeholder="Add video title" ></input><br></br>
                <label>ADD A VIDEO DESCRIPTION</label><br></br>
                <textarea id="name" type="text" name="description" placeholder="Add your description about the video" ></textarea>
                </div>
                <div className='button-container'>
                <div className="publish-button">
                       <button action={this.addVideo}><h3>PUBLISH</h3></button>
                       
                </div>
                <div className='cancel-button'>
                <Link to='/'><button ><h3>CANCEL</h3></button></Link>
                </div>
                </div>
                </form>
                </div>
            </div>
        )
    }
}

export default UploadPage