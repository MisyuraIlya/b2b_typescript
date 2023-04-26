import React from 'react';
import './Hero.styles.scss'
import { Button2 } from '../../constructor';
const Hero = () => {
    return (
        <div className='Hero'>
            <video 
            preload='preload'
            loop 
            autoPlay 
            playsInline
            className='video-background'
            >
            {window.innerWidth > 1200 ?
                <source src="https://amit-pastry-b2b.com/src/img/video.mp4" type="video/mp4" /> :
                <source src="https://amit-pastry-b2b.com/src/img/video.mp4" type="video/webm" />
            }
            </video>
            <div className='content'>
                <div>
                    <div className='img_block'>
                        <img src='https://amit-pastry-b2b.com/src/img/logo-footer.png' />
                    </div>
                    <div className='btn_container'>
                        <div className='btn'>
                            <Button2 Primary={true}>first btn</Button2>
                        </div>
                        <div className='btn'>
                            <Button2 Primary={false}>second btn</Button2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;