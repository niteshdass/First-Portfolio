import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import img from "../images/n.jpg";
 class Landingpage extends Component {
    render() {
        return (
            <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img" src={img} alt="not found"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Devloper</h1>
                            <hr/>
                            <p>Html | css | Bootstrap | Php | Mysql | Laravel | React | React-Native | NodeJs | Express | MongoDb</p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Landingpage;  