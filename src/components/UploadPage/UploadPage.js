import React, { Component } from 'react'
import thumbnailVideo from '../../3.0 - Assets/Images/Upload-video-preview.jpg'
import './uploadPage.css'

function UploadPage () {
    
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
                <form className='uploadpage-Form'>
                    <div className='form-inputs'>
                <label>TITLE YOUR VIDEO</label><br></br>
                <input type='text' id='name' name='Videotitle' placeholder="Add video title"></input><br></br>
                <label>ADD A VIDEO DESCRIPTION</label><br></br>
                <textarea id="name" type="text" name="name" placeholder="Add your description about the video"></textarea>
                </div>
                <div className='button-container'>
                <div className="publish-button">
                       <button><h3>PUBLISH</h3></button>
                       
                </div>
                <div className='cancel-button'>
                <button><h3>CANCEL</h3></button>
                </div>
                </div>
                </form>
                </div>
            </div>
        )
    
}

export default UploadPage