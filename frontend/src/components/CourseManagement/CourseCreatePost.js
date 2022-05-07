import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import moment from "moment";

export default class CourseCreatePost extends Component {

  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      courseID:Date.now(),//Enrollment key
      subject:"",
      date:"",
      fee:"",
      courseNameError:"",
      courseIDError:"",
      subjectError:"",
      dateError:"",
      feeError:""
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
    let courseNameError = "";
    let courseIDError = "";
    let subjectError = "";
    let dateError = "";
    let feeError = "";
   
   

     if (!this.state.courseName) {
      courseNameError = "* Course Name is Required!";
     }

     if (!this.state.courseID) {
      courseIDError = "* Course ID is Required!";
     }

    if (!this.state.subject) {
      subjectError = "* Subject is Required!";
    }

    if (!this.state.date) {
      dateError = "* Date is Required!";
    }

    if (!this.state.fee) {
      feeError = "* Fee is Required!";
    }

    
  


  if (

    courseNameError ||
    courseIDError ||
    subjectError ||
    dateError ||
    feeError 
     
     

    ) {
      this.setState({
        courseNameError,
        courseIDError,
        subjectError,
        dateError,
        feeError,
      });

      return false;

    }
    return true;
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const isValid = this.validate();

    const {courseName,courseID,subject,date,fee} = this.state;

    if (isValid){

    const data ={
      courseName:courseName,
      courseID:courseID,
      subject:subject,
      date:date,
      fee:fee
    }
        console.log(data)
    


        axios.post("http://localhost:8000/course/save", data).then((res) => {
          swal.fire("Saved", "Saved Successfully", "success");
          if(res.data.success){
            this.setState({
                 courseName:"courseName",
                 courseID:"courseID",
                 subject:"subject",
                 date:"date",
                 fee:"fee",
              }
            )
            }
          });
        };
         };

         
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{color: 'yellow' }}>Create new course </h1>
      <form className="needs-validation" noValidate>
        

        {/* <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course ID </label>
          readonly
          <input type="text"
          className="form-control"
          name="courseID"
          placeholder="Enter Course ID"
          value={this.state.courseID}
          onChange={this.handleInputChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.courseIDError}
        </div>
        </div> */}

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
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

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Subject </label>
          <input type="text"
          className="form-control"
          name="subject"
          placeholder="Enter Subject"
          value={this.state.subject}
          onChange={this.handleInputChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.subjectError}
        </div>
        </div>

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Date</label>
          <input type="date"
          className="form-control"
          name="date"
          placeholder="Enter Date"
          value={this.state.date}
          onChange={this.handleInputChange}
          max={moment().format("YYYY-MM-DD")}
          />
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.dateError}
        </div>
        </div>

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Fee</label>
          <input type="text"
          className="form-control"
          name="fee"
          placeholder="Enter Fee"
          value={this.state.fee}
          onChange={this.handleInputChange}/>

       <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.feeError}
        </div>
        </div>

        <button className="btn btn-success" type="submit" style={{color:'#FFFFFF',marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
         
          &nbsp; Save
          
        </button>
       
    
    
   
     </form>
    </div>
    
    
    )
  }
}

    
  
