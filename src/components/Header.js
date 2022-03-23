import React from 'react'
import logo from '../3.0 - Assets/Logo/BrainFlix-logo.svg'
import SearchLogo from '../3.0 - Assets/Icons/search.svg'
import MuruganImage from '../3.0 - Assets/Images/Mohan-muruge.jpg'
import uploadbutton from '../3.0 - Assets/Icons/upload.svg'
import './Header.css'
import { Link } from 'react-router-dom'
import UploadPage from './UploadPage/UploadPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
        <div className='logo'>
        <Link to={`/`}>
          <img src={logo}alt={"logo"}></img>
        </Link>
        </div>
        <div className='container'>
          <div className='search-logo'>
          <img src={SearchLogo} alt={"search"}></img>
          <input id='name' type="text" name="name" placeholder="Search"></input>
        </div>
        </div>

        
        <div className='upload-button'>
        <img src={uploadbutton}alt={"upload"}></img>
        <button><Link to={`/UploadPage`}>UPLOAD</Link></button> 
  
        </div>
       

        <div className='muruganImage'>
        <img src={MuruganImage}alt={"Murugun"}></img>
        </div>
    </div>
  )
}

export default Header