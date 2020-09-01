import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import ProgressBar from 'react-mdl/lib/ProgressBar'
 class Skill extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={12}>
        <div style={{display:'flex'}}>
            {this.props.skill}
            <ProgressBar style={{margin:'auto',width:'70%'}} progress={this.props.progress}/>
        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Skill;