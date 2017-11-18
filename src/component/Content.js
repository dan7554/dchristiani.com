import React, { Component } from 'react'
import { render } from 'react-dom'
export default class Content extends Component {
    render() {
        return (
            <div style={{ backgroundImage: 'url(../assets/mount.jpg)', height: '92%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '5% 10% 5% 10%' }}>
                <div style={{ padding: '1%', backgroundColor: 'rgba(255,255,255,0.5)' }}>
                    <h3>I'm looking for a new job!</h3> 
                    <h3>If you have an opening in the Salt Lake City, San Fran, or Boston locations, I'd love to hear about it.</h3>
                    <h3>Please contact me regarding full stack or similar SE positions.</h3>
                    <a style={{ padding: '0 5px' }} href="https://s3.amazonaws.com/dchristiani/Resume_Christiani_2017_Current.pdf" download>
                        <button className="mui-btn mui-btn--raised">Resume PDF</button>
                    </a>
                    <a style={{ padding: '0 5px' }} href="https://s3.amazonaws.com/dchristiani/Resume_Christiani_2017_Current.docx" download>
                        <button className="mui-btn mui-btn--raised">Resume DOCX</button>
                    </a>
                </div>
            </div>
        )
    }
}

