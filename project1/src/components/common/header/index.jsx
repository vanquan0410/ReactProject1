import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ImageSlide1 from '../../../assets/img/logo-new-1.png'
import ImageSlide2 from '../../../assets/img/logo-new-2.png'

Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <div className="header-t">
                <div className="header-top-phone">028.6273.3496</div>
                <div className="header-top-job">Post a job</div>
                <div className="header-top-contact">contact us</div>
            </div>
            <div className="header-b">
                <img className="img-left" src={ImageSlide1}></img>
                <img className="img-right" src={ImageSlide2}></img>
            </div>
        </div>

    );
}

export default Header;