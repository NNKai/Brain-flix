import React from 'react';
import Form from '../Form/Form';
import './MainVideo.css'
import Avatar from 'react-avatar'

const SelectedVideoDetails = ({ video, currentComments }) => {
    let timestamp = video.timestamp
    
    let date = new Date(timestamp)
    let month ="0" + date.getMonth()
    let day = "0" + date.getDate()
    let year = date.getFullYear()
    let videoTimestamp = `${month.substr(-2)}-${day.substr(-2)}-${year}`
    
  return (
    <div className="videoDetail-container">
        <picture className='hero-image'>
        <img src={video.image}></img>
        </picture>
    <div className='middlePage-Container'>
      <h1 className='video-title'>{video.title}</h1>
      <div className='description-data'>
       
        <div className='viewsContainer'>
          <span><p>By {video.channel}</p></span>
          <p>{videoTimestamp}</p>
          </div>
          <div className='likesContainer'>
          <p>{video.likes}</p>
          <p>{video.views}</p>
          
         </div>
         
      </div>
      <div className='props-para'>
             <p>{video.description}</p>
         </div>
      <Form />
        <div className='comment-section-container '>
            {
            currentComments.map((comments, index)=>{
                return(
                    <CommentSection commentsbelow = {comments} key={index}/>
                )
            })
            }
        </div>
    </div>
    </div>
  );
};

function CommentSection(props) {
    let timestamp = props.commentsbelow.timestamp
    let date = new Date(timestamp)
    let month ="0" + date.getMonth()
    let day = "0" + date.getDate()
    let year = date.getFullYear()
    

    let formatedDate = `${month.substr(-2)}-${day.substr(-2)}-${year}`
    return(
        <div className="comment-name-date">
            
            <Avatar color="#e1e1e1" size="40" round={true} />
            <div className="name-date" key={props.commentsbelow.id}>
            
            <span><p>{props.commentsbelow.name}</p></span>
            <p>{formatedDate}</p>
            
            <span><p className="comments-para">{props.commentsbelow.comment}</p></span>
            </div>
        </div>
        
    )
}

export default SelectedVideoDetails;