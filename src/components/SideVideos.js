import SideVideosData from '../Data/videos.json'
import React from 'react'
import { v4 as uuid} from 'uuid';
import './sideVideos.css'
import App from '../App'





function SideVideos (props) {
    console.log(props)
    return(
        <div className='RecommendedVideos'>
            <h1>NEXT VIDEOS</h1>
            <section>
                {
                    props.sideVideo.map((video,index)=>{
                        return (
                            <RelatedVideo relatedVideoinformation = {video} key={video.id} clickHandle={()=>{props.clickHandle(video.id)}}/>
                        )
                    })
                }
               
               
            </section>
        </div>
    )
}

function RelatedVideo(props) {
    
    
    return (
        
        <div className='related-videos' onClick={(id)=>{

            props.clickHandle(id)}}>
            
            <img className='related-videos-img' src={props.relatedVideoinformation.image} ></img>
            <div className='related-videos-detail'>
            <span> 
            <p key={props.relatedVideoinformation.id}>{props.relatedVideoinformation.title}</p>
            </span>   
            <p>{props.relatedVideoinformation.channel}</p>
            </div>
            
        </div>
    )
}

export default SideVideos

