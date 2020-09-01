import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import img from "../images/n.jpg";
import Education from './Education'
import Exper from './Exper'
import Skill from './Skill'
 class Resume extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src={img} alt="hello" style={{height:'200px',width:'200px',borderRadius:"50%"}}/>
                    </div>
                    <div className="myClass">
                    <h2  style={{paddingTop:'2em'}}>Nitesh Das</h2>
                    <h4 style={{color:'gray'}}>Devloper</h4>
                    <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
                    <p  style={{width:'75%',margin:'auto',paddingTop:'1em'}}> I Am nitesh das.I am a Web specialist .I have experience of the 
                        Html,css,javascript,php,laravel,react,react-Native,nodeJs, Express,Mongodb and sql.
                    </p>
                        <hr style={{borderTop:'3px solid blue',width:'50%'}}/>
                    <h5>Address</h5>
                    <p>Korerpara,Sylhet</p>
                    <h5>Phone</h5>
                    <p>01747102896</p>
                    <h5>Email</h5>
                    <p>dasnitesh780@gmail.com</p>
                    <h5>web</h5>
                    <p>niteshdev.tk</p>
                    <hr style={{borderTop:'3px solid blue',width:'50%'}}/> 

                    </div>
                 
                </Cell>
                <Cell className="resume-right-col myClass" col={8}>
                    <h2>Education</h2>
                    <Education
                        startYear={2017}
                        endYear={'Running'}
                        varsityName={"Sylhet InterNational University"}
                        desc={
                            `I am the Student of sylhet international university ,Depertment Of B.S.C in C.S.E
                            I start the study of this varsity in 2017 and till running. `
                        }
                    />
                    <Education
                        startYear={2015}
                        endYear={2017}
                        varsityName={"Bibiana Model Degree College"}
                        desc={
                            `I am Nitesh Das , i was the student of Bibiana Model Degree College ,Depertment of science
                            .I passed the H.S.C exam in 2017 in this college with G.P.A 4.08`
                        }
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Experience</h2>
                    <Exper
                        startYear={2019}
                        endYear={2020}
                        varsityName={"Techleanch"}
                        desc={
                            `I was working That company as a Laravel Devloper , After 6 Month of the job. I am Intersting in Javascript and i Leave the Job`
                        }
                    />

                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skill
                        skill={'Html'}
                        progress={100}

                    />
                    <Skill
                        skill={'css'}
                        progress={80}

                    />
                    <Skill
                        skill={'javascript'}
                        progress={80}

                    />
                    <Skill
                        skill={'php'}
                        progress={80}

                    />
                    <Skill
                        skill={'Laravel'}
                        progress={70}

                    />
                    <Skill
                        skill={'React'}
                        progress={80}

                    />
                    <Skill
                        skill={'Node'}
                        progress={50}

                    />
                    <Skill
                        skill={'Express'}
                        progress={50}

                    />
                    <Skill
                        skill={'Mongodb'}
                        progress={50}

                    />
                </Cell>
            </Grid>
        )
    }
}
export default Resume;
