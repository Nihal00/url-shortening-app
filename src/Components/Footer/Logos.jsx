import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Logos = () => {
  return (
    <div className="flex flex-row gap-10">
      <FontAwesomeIcon icon={faSquareFacebook} className="text-white text-2xl hover:text-primaryCyan" />
      <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-primaryCyan"  />
      <FontAwesomeIcon icon={faPinterest} className="text-white text-2xl hover:text-primaryCyan" />
      <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-primaryCyan" />
    </div>
  )
}

export default Logos
