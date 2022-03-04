import React from "react";
import Data from '../Data/video-details.json'
import MuruganImage from '../3.0 - Assets/Images/Mohan-muruge.jpg'
import Avatar from 'react-avatar'
import './MainVideo.css'
import CommentLogo from '../3.0 - Assets/Icons/add_comment.svg'
import Fullscreen from '../3.0 - Assets/Icons/fullscreen.svg'
import Play from '../3.0 - Assets/Icons/play.svg'
import Volume from '../3.0 - Assets/Icons/volume_up.svg'
import Views from '../3.0 - Assets/Icons/views.svg'
import Likes from '../3.0 - Assets/Icons/likes.svg'
/*imports*/

let videoData = Data
let commentSection = videoData[0].comments
let newDate = new Date(commentSection[0].timestamp)
let formattedDate = newDate.getDay()+"-" + (newDate.getMonth()+1)+"-"+ newDate.getFullYear();
/*assigning Values*/

function MainVideo (props) {
    return(
        <div className='MainVideo' >
            <section>
                <MainVideoProps relatedVideoinformation = {props.currentVideo} key={props.currentVideo.id}/>
            </section>
            
            <section id="form">
                <div className="leftPaneling"><img src={MuruganImage}></img></div>
                <form action="#">
                    <div className="textAreaContainer">
                        <label>JOIN THE CONVERSATION</label>
                        <textarea id="name" type="text" name="name" placeholder="Add your comment here"></textarea>
                        </div>
                        <button className="addAComment-container">
                    <section className="comments">
                        <img src={CommentLogo}></img>
                    </section>
                        <h3>COMMENT</h3></button>
                </form>
            </section >                
                <section id="comment-section-container">
                    {
                    props.currentCommentsnow.map((comments,index)=>{
                        return (
                            <CommentSection commentsbelow = {comments} key={index}/>
                        )  })
                    }
                </section>
            
        </div>
    )
}




function MainVideoProps(props) {
    
    return (
        <div className="detail-container">
            <div className="props-image">
                <picture>
                <img src={props.relatedVideoinformation.image}></img>
                </picture>
            </div>
            <div className="video-Icons">
                <section className="play-Icon-Container">
                    <img className="play-Icon"src={Play}></img>
                </section>
                <section className="right-Icons-Container"><img className="fullScreen-Icon"src={Fullscreen}></img>
                <img className="fullScreen-Icon"src={Volume}></img></section>
            </div>
        <div className="oneBigDetailContainer">
            <section className="details-Container">
            <div className="props-h1">
                <h1>{props.relatedVideoinformation.title}</h1>
            </div>
            <div id="panel-container">
                <section className="panel-container-left">
                    <span><p>By {props.relatedVideoinformation.channel}</p></span>
                    <p>{ formattedDate}</p>
                </section>
                <section className="panel-container-right">
                    <div className="viewsContainer">
                    <img src={Views}></img>
                    <p>{props.relatedVideoinformation.views}</p>
                    </div>
                    <div className="likesContainer">
                    <img src={Likes}></img>
                    <p>{props.relatedVideoinformation.likes}</p>
                    </div>
                </section>
            </div>
            
            <div className="props-para">
            <p>{props.relatedVideoinformation.description}</p>
            </div>
            <p className="commentsSection-Length">{commentSection.length} Comments</p>
            </section>
            </div>
        </div>
        
    )
}

function CommentSection(props) {
    return(
        <div className="comment-name-date">
            
            <Avatar color="#e1e1e1" size="40" round={true} />
            <div className="name-date" key={props.commentsbelow.id}>
            
            <span><p>{props.commentsbelow.name}</p></span>
            <p>{formattedDate}</p>
            </div>
            <p className="comments-para">{props.commentsbelow.comment}</p>
        </div>
        
    )
}

export default MainVideo