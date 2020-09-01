import React, { Component } from 'react'
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom'
import './App.css'
export default class App extends Component {
  render() {
    return (
    
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link to="/" style={{textDecoration:'none'}}>MY-PORTFOLIO</Link>} scroll>
            <Navigation>
                <Link to="/">Home</Link>
               
                <Link to="project">Project</Link>
                <Link to="resume">Resume</Link>
                <Link to="contact">Contact</Link>
                <Link to="aboutme">About-Me</Link>
            </Navigation>
        </Header>
        <Drawer  title={<Link to="/" style={{textDecoration:'none'}}>MY-PORTFOLIO</Link>}>
            <Navigation>
            <Link to="/">Home</Link>
               
                <Link to="project">Project</Link>
                <Link to="resume">Resume</Link>
                <Link to="contact">Contact</Link>
                <Link to="aboutme">About-Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" >
                <Main/>
            </div>
        </Content>
    </Layout>
</div>
      
    )
  }
}

