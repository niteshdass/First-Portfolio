import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import img from "../images/n.jpg";
 class Aboutme extends Component {
    render() {
        return (
            <div>
                <div style={{width:'100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img" src={img} alt="not found"/>

                        <div className="banner-text">
                            <h1>About Me</h1>
                            <hr/>
                            <p>Please Vist Contact and Resume page</p>
                            <div className="social-links">


                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
            </div>
        )
    }
}
export default Aboutme;
