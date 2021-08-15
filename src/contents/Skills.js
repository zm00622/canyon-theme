import React, { Component } from 'react';
import StockAppImg from "../img/stockApp.png";
import BookAppImg from "../img/bookApp.png";
import LoginIMG from "../img/login.png";
import ToDoIMG from "../img/ToDoList.png";
import AdIMG from "../img/advertisment.png";
import CourseIMG from "../img/onlineCourse.png";
import BannerIMG from "../img/websiteBanner.png";
import ThisSiteIMG from "../img/thisSite.png";
import LessonsIMG from "../img/lessons.png";

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['HTML','CSS','REACT JS','GIT', 'WORDPRESS', 'PHOTOSHOP']
        };
    }

    render() {
        return (
            <div className="col-home">
            
            <h1 className="subtopic">Some of My Work</h1>
            
            {/* Stock App */}
            <p className="projects"><a href="https://zm00622.github.io/stock-tracker/" target="_blank" rel="noopener noreferrer">React Stock Market App</a></p>
            <img src={StockAppImg} className="projectIMG"></img>
            
            {/* Book App */}
            <p className="projects"><a href="https://zm00622.github.io/bookapp/" target="_blank" rel="noopener noreferrer">React Book Recommendation App</a></p>
            <img src={BookAppImg} className="projectIMG"></img>
           
            {/* UI for Freelance Client */}
            <p className="projects">UI for Freelance Client</p>
            <img src={LoginIMG} className="projectIMG"></img>

            {/* Community Outreach */}
            <p className="projects">Community Outreach</p>
            <img src={LessonsIMG} className="projectIMG"></img>

            {/* Advertisement Video for Freelance Client */}
            <p className="projects"><a href="https://youtu.be/iQWJKVKLKF4" target="_blank" rel="noopener noreferrer">Advertisement for Freelance Client</a></p>
            <img src={AdIMG} className="projectIMG"></img>

            {/* Website Banner for Freelance Client */}
            <p className="projects">Website Banner for Freelance Client</p>
            <img src={BannerIMG} className="projectIMG"></img>

            {/* Personal To Do List App */}
            <p className="projects">Personal To Do List App</p>
            <img src={ToDoIMG} className="projectIMG"></img>

            {/* My Online Course */}
            <p className="projects"><a href="https://www.udemy.com/course/beautiful-survey-application-beginner-brain-friendly-guide/" target="_blank" rel="noopener noreferrer">My Online Course</a></p>
            <img src={CourseIMG} className="projectIMG"></img>

            {/* This Site! */}
            <p className="projects">This Site!</p>
            <img src={ThisSiteIMG} className="projectIMG"></img>

            <h1 className="subtopic">My Skills</h1>
            <p className="about">
            {this.state.myskills.map((value)=>{
                return <p><center>{value}</center></p>
            })}
            </p>
            <p className="projects"><a href="https://www.instagram.com/zarysprogramming/?hl=en" target="_blank" rel="noopener noreferrer">More on Instagram</a></p>
            <p className="projects"><a href="https://www.linkedin.com/in/zary-manning-4b8953198/" target="_blank" rel="noopener noreferrer">Follow me on LinkedIn</a></p>
            <p className="contact-text">
            <h3><center>Email  :   zarymanning@gmail.com</center></h3>
            <h3><center>Phone   :   (912) 574-0033</center></h3>
            </p>
            </div>
            )
        }
    }
    
    export default Skills


            // Original Skills list from the default theme

            // <ul>
            // {this.state.myskills.map((value)=>{
            //     return <li>{value}</li>
            // })}
            // </ul>
    