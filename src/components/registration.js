import React, { Component } from 'react'
import './registration.css'
import axios from 'axios'

class Registration extends Component{
    constructor(props){
        super(props)
            this.state={
                fnam: "",
                lnam: "",
                age: "",
                gender: "",
                dob: "",
                mail: "",
                pas: ""
            }
        }

        change= (e)=>{
            let nam=e.target.name;
            let val= e.target.value;
            this.setState({ [nam]: val })
        }

        // submit= ()=>{
        //     const user={this.setState({ [nam]: val  })}
        // }

        // submit= ()=>{
        //     alert("you're about to submit your information"+this.state.age);
        // }

        render(){
            return(
                <div className="man">
                    <form onSubmit={this.submit}>
                    <fieldset>
                        <h3 id="it">REGISTER WITH GHETTO CHESS, Kisumu</h3>
                        <legend>Personal Info.</legend>
                        
                        <br />

                        <label>First Name: </label> <br />
                        <input type="text" name="fnam" onChange={this.change} placeholder="Enter your first name..." />
                        <br />
                        <br />
                        <label>Last Name: </label> <br />
                        <input type="text" name="lnam" onChange={this.change} placeholder="Enter your last name..." />
                        <br />
                        <br />

                        <label>Age: </label> <br />
                        <input type="number" name="age" onChange={this.change} placeholder="Enter your age..." />
                        <br />
                        <br />

                        {/* <label>Gender: </label> <br />
                        <input type="text" name="gender" onChange={this.change} placeholder="Enter your gender..." />
                        <br />
                        <br /> */}

                        <label>D.O.B: </label> <br />
                        <input type="date" name="dob" onChange={this.change} placeholder="Enter your date of birth..." />
                        <br />
                        <br />

                        <label>Mail: </label> <br />
                        <input type="mail" name="mail" onChange={this.change} placeholder="Enter your email address ..." />
                        <br />
                        <br />

                        <label>Password: </label> <br />
                        <input name="password" onChange={this.change} placeholder="Enter your mail password..." />
                        <br />
                        <br />

</fieldset>

                        <button type='submit' name='submit' onClick={this.submit}>SUBMIT</button>
                        </form>

                        <p> Already have account?| <a href="">login</a></p>

                        <br />
                        <br />
                </div>
            )
        }
    }

export default Registration