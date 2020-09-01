import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Contact from './contact';
import Aboutme from './aboutme'
import Project from './project';
import Resume from './resume'
const Main = () =>(
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route  path="/contact" component={Contact}/>
        <Route  path="/aboutme" component={Aboutme}/>
        <Route  path="/project" component={Project}/>
        <Route  path="/resume" component={Resume}/>
    </Switch>
)
export default Main;

