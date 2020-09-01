import React, { Component } from 'react'
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'
import '../App.css'
import img from "../images/n.jpg";

 class Contact extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="content-grid">
                    <Cell col={6}>
                        <h2>Nitesh Das</h2>
                        <img src={img} alt="profile pic" style={{height: '250px',width:'250px',borderRadius:'10%'}}/>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        I Am nitesh das.I am a Web specialist .I have experience of the 
                        Html,css,javascript,php,laravel,react,react-Native,nodeJs, Express,Mongodb and sql.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                     - 01747102896
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                     dasnitesh780@gmail.com
                                </ListItemContent>
                            </ListItem>


                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-facebook" aria-hidden="true"/>
                                     https://www.facebook.com/bindaas
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                     My-fax
                                </ListItemContent>
                            </ListItem>
                           
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
