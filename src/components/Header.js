import React from 'react'
import logo from '../3.0 - Assets/Logo/BrainFlix-logo.svg'
import SearchLogo from '../3.0 - Assets/Icons/search.svg'
import MuruganImage from '../3.0 - Assets/Images/Mohan-muruge.jpg'
import uploadbutton from '../3.0 - Assets/Icons/upload.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
          <img src={logo}></img>
        </div>
        <div className='container'>
          <div className='search-logo'>
          <img src={SearchLogo}></img>
          <input id='name' type="text" name="name" placeholder="Search"></input>
        </div>
        </div>
        <div className='upload-button'>
        <img src={uploadbutton}></img>
        <button>UPLOAD</button>
        </div>
        <div className='muruganImage'>
        <img src={MuruganImage}></img>
        </div>
    </div>
  )
}

export default Header