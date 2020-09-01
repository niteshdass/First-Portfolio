import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
 class Exper extends Component {
    render() {
        return (
            <div>
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
export default Exper;
