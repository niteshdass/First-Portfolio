import React, { Component } from 'react'
import img from "../images/n.jpg";
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    render() {
        return (
            <div>
                <Card shadow={0} style={{ width: '400px', margin: '15px' }}>
        <CardTitle style={{ color: '#fff', height: '250px'  }}> 
        <img style={{ color: '#fff', height: '250px' }} src={this.props.img} alt="not found"/>
        </CardTitle>
                    <CardText>
                       <h5>{this.props.name}</h5>
                       {this.props.desc}
                    </CardText>
                    <CardActions border>
                        <Button colored><a style={{textDecoration:'none'}} href={this.props.link}>Github</a></Button>
                        <Button colored><a style={{textDecoration:'none'}} href={this.props.link1}>Codepen</a></Button>
                        <Button colored><a style={{textDecoration:'none'}} href={this.props.link2}>Live Demo</a></Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}
export default Projects;