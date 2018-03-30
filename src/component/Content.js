import React, { Component } from 'react'
import { render } from 'react-dom'
export default class Content extends Component {
    render() {
        const buttonStyle =     
            {
                display: 'inline-block',
                margin: 'auto',
                marginBottom: '15px'
            };
        return (
            <div style={{ 
                backgroundImage: 'url(../assets/mount.jpg)', 
                height: '92%', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                padding: '5% 10% 5% 10%' 
            }}>
                <div 
                style={{ 
                    padding: '1%', 
                    backgroundColor: 'rgba(255,255,255,0.5)' 
                }}>
                    <h3>Hello, I am a Web Developer at Allen Communications in Salt Lake City, Utah</h3> 
                    <h3>I am always interested in hearing about new positions, especially in the Honolulu, San Diego, Seattle, and Boston areas!</h3>
                    <h3>Please contact me regarding full stack, front end, or similar SE positions.</h3>
                    <a style={{ padding: '0 5px' }} 
                        href="https://s3.amazonaws.com/dchristiani/Resume_Christiani_2018.pdf" 
                        target='_blank'>
                        <button style={buttonStyle} className="mui-btn mui-btn--raised">Resume PDF</button>
                    </a>
                    <a style={{ padding: '0 5px' }} 
                        href="https://s3.amazonaws.com/dchristiani/Resume_Christiani_2018.docx" 
                        target='_blank'> 
                        <button style={buttonStyle}  className="mui-btn mui-btn--raised">Resume DOCX</button>
                    </a>
                </div>
            </div>
        )
    }
}

