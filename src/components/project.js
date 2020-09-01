import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import '../App.css'
import Projects from './Projects'
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    toggoleCategories() {
        if (this.state.activeTab === 0) {
            return (
               <div className="projects-grid" >
                <Projects
                    img={'https://colorlib.com/wp/wp-content/uploads/sites/2/heap-masonry-blog-theme.jpg'}
                    name={'my-news-api-application'}
                    desc={`Hello, this is a Build a Voice Controlled React News Application`}
                    link={'https://github.com/niteshdass/voice-api-news-site'}
                    link1={'https://google.com'}
                    link2={'https://my-news-api-application.netlify.app'}
              
              
              />


                <Projects
                    img={'https://athemes.com/wp-content/uploads/type-free-blog-wordpress-theme.jpg'}
                    name={'My-Personal-Blog-site'}
                    desc={`there is nice blog site, this site made by react and html css`}
               
                    link={'https://github.com/niteshdass/personal-blog'}
                    link1={'https://google.com'}
                    link2={'https://bindaas-personal-blog.netlify.app'}
               
               />

<Projects
                    img={'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/01/785054-ecommerce-istock-020119.jpg'}
                    name={'React-Phone-Store-App'}
                    desc={`this is my react phone ecomrece site ,it really nice and it made by react`}
               
                    link={'https://github.com/niteshdass/react-phone-ecomerce'}
                    link1={'https://google.com'}
                    link2={'https://my-mobile-shop.netlify.app'}
               
               />
                
                
               </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
               
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                   


             

                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                  


               

                
                </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is Node</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>React-Native</Tab>
                    <Tab>MERN</Tab>
                    <Tab>Laravel</Tab>
                    <Tab>Node js</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggoleCategories()}
                            </div>
                        </Cell>
                    </Grid>

              
            </div>
        )
    }
}
export default Project;