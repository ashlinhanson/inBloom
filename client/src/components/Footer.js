import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'





function Footer() {
  return(
  
  <body className="d-flex flex-column">
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
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
    </footer>
  </body>

  )
};

export default Footer;