import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from "react-router-dom";
import swal from "sweetalert2";


export default class StaffSignup extends Component{

    constructor(props){
      super(props);
      this.state={
        name:"",
        subject:"",
        qulification:"",
        phonenumber:"",
        email:"",
        password:"",

        nameError:"",
        subjectError:"",
        qulificationError:"",
        phonenumberError:"",
        emailError:"",
        passwordError:""
      }
    }
  
    handleInputChange = (e) =>{
      const {name,value} = e.target;
  
      this.setState({
        ...this.state,
        [name]:value
      })
    }

    validate = () => {
      let nameError = "";
      let subjectError = "";
      let qulificationError = "";
      let phonenumberError = "";
      let emailError = "";
      let passwordError = "";
     
     
  
       if (!this.state.name) {
        nameError = "* Name is Required!";
       }
  
       if (!this.state.subject) {
        subjectError = "* subject is Required!";
       }
  
      if (!this.state.qulification) {
        qulificationError = "* Qulification is Required!";
      }
  
      if (!this.state.phonenumber) {
        phonenumberError = "* Phone Numbere is Required!";
      }
  
      if (!this.state.email) {
        emailError = "* Email is Required!";
      }
  
      if (!this.state.password) {
        passwordError = "* Password is Required!";
      }
  
      
    
  
  
    if (
  
        nameError ||
        subjectError ||
        qulificationError ||
        phonenumberError ||
        emailError ||
        passwordError
       
       
  
      ) {
        this.setState({
          nameError,
          subjectError,
          qulificationError,
          phonenumberError,
          emailError,
          passwordError,
        });
  
        return false;
  
      }
      return true;
    }
  
  
    onSubmit = (e) =>{
  
      e.preventDefault();

      const isValid = this.validate();
  
      const {name,subject,qulification,phonenumber,email,password} = this.state;

      if(isValid){
  
      const data ={
        name:name,
        subject:subject,
        qulification:qulification,
        phonenumber:phonenumber,
        email:email,
        password:password
      }
  
      console.log(data)
  
      axios.post(`http://localhost:8000/staff/save`,data).then((res) =>{
        if(res.data.success){
          swal.fire("Registered", "Registered Successfully", "success");
          this.setState(
            {
              name:"",
              subject:"",
              qulification:"",
              phonenumber:"",
              email:"",
              password:""
            }
          )
        }
      })
    }
    }
    render(){
      return(
        
        <div className="col-md-8 mt-4 mx-auto">
          
               
                
        <h1 className="h3 mb-3 font-weight-normal" style={{color: 'yellow',marginLeft:'290px'}}>Staff Registration Form</h1>
          <form className="needs-validation" noValidate>

            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name" 
              value={this.state.name}
              onChange={this.handleInputChange}>
                  
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.nameError}
            </div>


            </div>

            

            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Subject</label>
              <input type="text"
              className="form-control"
              name="subject"
              placeholder="Enter Subject"
              value={this.state.subject}
              onChange={this.handleInputChange}>
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.subjectError}

              </div>

            </div>


            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Qulification</label>
              <input type="text"
              className="form-control"
              name="qulification"
              placeholder="Enter Qulification"
              value={this.state.qulification}
              onChange={this.handleInputChange}>
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.qulificationError}

              </div>


            </div>

            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Phone Number</label>
              <input type="text"
              className="form-control"
              name="phonenumber"
              placeholder="Enter Phone Number"
              value={this.state.phonenumber}
              onChange={this.handleInputChange}>
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.phonenumberError}

              </div>

            </div>

            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}>
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.emailError}

              </div>

            </div>

            <div className="form-group" style={{color: '#FFFFFF',marginBottom:'10px'}}>
              <label style={{marginBottom:'5px'}}>Password</label>
              <input type="password"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputChange}>
              </input>

              <div style={{fontSize:12 , color:"red"}}>{this.state.passwordError}

              </div>


            </div>

            

            

            <button className="btn btn-success" type="submit" style={{marginLeft:'375px'}} onClick={this.onSubmit} >
            <a href="/StaffLogin" style={{textDecoration:'none',color:'#FFFFFF'}}> Register
            </a>
               
            </button>

            <div className="signup-image">
                <NavLink to="/Stafflogin" className="signup-image-link" style={{color: '#FFFFFF',marginLeft:'365px', marginBottom:'15px'}}>I am alredy register</NavLink>

              
            </div>

          </form>
        
      </div>
      
    )
  }
}
