import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'





function Footer() {
  return(
  
    <div className="footer mt-5">
      <div className="container text-center">
        <div className="row">
        <i class="fab fa-github"></i>
        <small className="footer-text">Copyright &copy; inBloom</small>
        </div>
        <div className="row">
        <a href="https://github.com/ashlinhanson/inBloom" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" id="github-icon"/>
        </a>
        </div>
      </div>
    </div>


  )
};

export default Footer;