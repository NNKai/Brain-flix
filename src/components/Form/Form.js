import React from 'react'
import MuruganImage from '../../3.0 - Assets/Images/Mohan-muruge.jpg'
import CommentLogo from '../../3.0 - Assets/Icons/add_comment.svg'

const Form = () => {
  return (
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
  )
}

export default Form