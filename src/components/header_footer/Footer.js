import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
      <footer className="bck_red">
        
        <Fade delay={500}>
            <div className="footer_righteous footer_logo_venue">The Venue Media</div>
            <div className="footer_copyright">The Venue 2018. All right reserved.</div>
        </Fade>

      </footer>
    )
}

export default Footer;