import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";

export default class StudentEditPost extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      studentName:"",
      studentID:"",
      courseName:"",
      email:"",
      phone:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
      
      this.setState({
        ...this.state,
        [name]: value,
      });
  };

  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;

    const {studentName,studentID,courseName,email,phone} = this.state;

    const data ={
      studentName:studentName,
      studentID:studentID,
      courseName:courseName,
      email:email,
      phone:phone
    }

        console.log(data);
    


        axios.put(`http://localhost:8000/student/update/${id}`, data).then((res) => {
          if(res.data.success){
            swal.fire("Updated", "updated Successfully", "success");
            this.setState({
              studentName:"studentName",
              studentID:"studentID",
              courseName:"courseName",
              email:"email",
              phone:"phone"
              }
            )
            }
          });
         };

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/student/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              
              studentName:res.data.student.studentName,
              studentID:res.data.student.studentID,
              courseName:res.data.student.courseName,
              email:res.data.student.email,
              phone:res.data.student.phone

            });

            console.log(this.state.student);
          };


    });
  };
  
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Update Student Details</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Student Name </label>
          <input type="text"
          className="form-control"
          name="studentName"
          placeholder="Enter Studnet Name"
          value={this.state.studentName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Student ID </label>
          <input type="text"
          className="form-control"
          name="studentID"
          placeholder="Enter student ID"
          value={this.state.studentID}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course Name </label>
          <input type="text"
          className="form-control"
          name="courseName"
          placeholder="Enter Course Name"
          value={this.state.courseName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Email</label>
          <input type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={this.state.email}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Phone</label>
          <input type="number"
          className="form-control"
          name="phone"
          placeholder="Enter Phone No"
          value={this.state.phone}
          onChange={this.handleInputChange}/>
        </div>

        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
       
    
    
   
     </form>
    </div>
    
    
    );
  };
};


    
  

