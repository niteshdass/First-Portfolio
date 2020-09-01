import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import '../App.css'
 class Education extends Component {
    render() {
        return (
            <div className="myClass">
                <Grid>
                    <Cell col={4}>
                        {this.props.startYear} - {this.props.endYear}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop:'1px',}}>
                            {this.props.varsityName}
                        </h4>
                        <p>
                            {this.props.desc}
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Education;
