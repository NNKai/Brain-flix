import React from 'react';
import { Link } from 'react-router-dom'
import './sideVideos.css'

const VideoList = ({ allVideos }) => {
    
  return (
    <div className="RecommendedVideos">
      <h1 className='next-video'>Next video</h1>
      <div className='related-videos'>
         {allVideos.map(video => (
             <div className='video-List-Container'>
                 <Link to={`/${video.id}`}>
                     <img className='related-videos-img' src={video.image}></img>
                     
                 </Link>
                 <div className='related-videos-detail'>
                 <span><p>{video.title}</p></span>
                 <p>{video.channel}</p>
                 </div>
             </div>
         ))}
      </div>

      
    </div>
  );
};

export default VideoList ;