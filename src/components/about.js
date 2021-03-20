import React from 'react'
import {IoIosCall}  from "react-icons/io";
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import{FaSkype} from 'react-icons/fa'
import {IconContext} from 'react-icons'



function About(){

        return(
                
        <div>
        <h3>GHETTO CHESS</h3>
        <p>GHETTO CHESS is a not-for-profit chess initiative, rather foundation, established around 2021. </p>
       
        <pre>
        FOUNDER: Owino Agola
        PLACE:Nyalenda Slums, Kisumu
        </pre>

       <p> reach us on our social media platforoms:<br/> 
       <IconContext.Provider value={{ size:'25px'}}>
       <IoIosCall color='green' /> +254 759 080 429
                        <br />
                <FaFacebookF color='blue' /> ghettochess.ke
                <br />
                <FaLinkedin color='blue' /> @ghettoChessKE
                <br />
                <FaSkype color='blue' /> GhettoChess
       </IconContext.Provider>

     
                
       </p>
        
        </div>
        )
    

}
export default About