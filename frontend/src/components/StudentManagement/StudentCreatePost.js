import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";


export default class StudentCreatePost extends Component {

  constructor(props){
    super(props);
    this.state = {
      studentName:"",
      studentID:"",
      courseName:"",
      email:"",
      phone:"",
      studentNameError:",",
      studentIDError:",",
      courseNameError:",",
      emailError:",",
      phoneError:","
    };
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
      
      this.setState({
        ...this.state,
        [name]: value,
      });
  };

  validate = () => {
    let studentNameError = "";
    let studentIDError = "";
    let courseNameError = "";
    let emailError = "";
    let phoneError = "";
   
   

     if (!this.state.studentName) {
      studentNameError = "* studentName is Required!";
     }

     if (!this.state.studentID) {
      studentIDError = "* studentID is Required!";
     }

    if (!this.state.courseName) {
      courseNameError = "* courseName is Required!";
    }

    if (!this.state.email) {
      emailError = "*  email is Required!";
    }

    if (!this.state.phone) {
      phoneError = "* phone is Required!";
    }

    
  


  if (

    studentNameError ||
    studentIDError ||
    courseNameError ||
    emailError ||
    phoneError 
     
     

    ) {
      this.setState({
        studentNameError,
        studentIDError,
        courseNameError,
        emailError,
        phoneError,
      });

      return false;

    }
    return true;
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const isValid = this.validate();

    const {studentName,studentID,courseName,email,phone} = this.state;

    if (isValid){

    const data ={
      studentName:studentName,
      studentID:studentID,
      courseName:courseName,
      email:email,
      phone:phone
    }
        console.log(data)
    


        axios.post("http://localhost:8000/student/save", data).then((res) => {
          swal.fire("Saved", "Saved Successfully", "success");
          if(res.data.success){
            this.setState({
              studentName:"studentName",
              studentID:"studentID",
              courseName:"courseName",
              email:"email",
              phone:"phone",
              }
            )
            }
          });
        };
         };

         
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{color: '#ffffff'}}>Register New Student</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{color: '#00CED1',marginBottom:'5px'}} >Student Name </label>
          <input type="text"
          className="form-control"
          name="studentName"
          placeholder="Enter Student Name"
          value={this.state.studentName}
          onChange={this.handleInputChange}/>
           <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.studentNameError}
        </div>
        </div>

        <div className="form-group" style={{color: '#00CED1',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Student ID </label>
          <input type="text"
          className="form-control"
          name="studentID"
          placeholder="Enter Student ID"
          value={this.state.studentID}
          onChange={this.handleInputChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.studentIDError}
        </div>
        </div>

        <div className="form-group" style={{color: '#00CED1',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course Name </label>
          <input type="text"
          className="form-control"
          name="courseName"
          placeholder="Enter Course Name"
          value={this.state.courseName}
          onChange={this.handleInputChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.courseNameError}
        </div>
        </div>

        <div className="form-group" style={{color: '#00CED1',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Email</label>
          <input type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          
          />
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
        </div>
        </div>

        <div className="form-group" style={{color: '#00CED1',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Phone No</label>
          <input type="number"
          className="form-control"
          name="phone"
          placeholder="Enter phone Number"
          value={this.state.phone}
          onChange={this.handleInputChange}/>

       <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.phoneError}
        </div>
        </div>

        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
         
          &nbsp; Save
          
        </button>
       
    
    
   
     </form>
    </div>
    
    
    )
  }
}

    
  
