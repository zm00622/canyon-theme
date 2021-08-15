import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="col-home">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Anthropology | B.A." where="Georgia Southern University" gpa="3.74 GPA | Magna Cum Laude" from="July 2013" to="December 2015"/>
            <Widecard title="Philosophy" where="College of Coastal Georgia" from="2011" to="2013"/>
            <p className="contact-text">
            <h3><center>Email  :   zarymanning@gmail.com</center></h3>
            <h3><center>Phone   :   (912) 574-0033</center></h3>
            </p>
            </div>
            )
        }
    }
    
export default Education
    