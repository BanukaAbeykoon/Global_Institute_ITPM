import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import moment from "moment";

export default class PaymentCreatePost extends Component {

  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      studentID:"",
      userName:"",
      password:"",
      branch:"",
      date:"",
      fee:"",
      paymentSlip:"",
      courseNameError:"",
      studentIDError:"",
      userNameError:"",
      passwordError:"",
      branchError:"",
      dateError:"",
      feeError:"",
      paymentSlipError:""
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
    let studentIDError = "";
    let userNameError = "";
    let passwordError = "";
    let branchError = "";
    let dateError = "";
    let feeError = "";
    let paymentSlipError = "";
   
   

     if (!this.state.courseName) {
      courseNameError = "* Course Name is Required!";
     }

     if (!this.state.studentID) {
      studentIDError = "* Student ID is Required!";
     }

     if (!this.state.userName) {
      userNameError = "* User  Name is Required!";
     }

    if (!this.state.password) {
      passwordError = "* Password  is Required!";
    }

    if (!this.state.branch) {
      branchError = "* Branch  name is Required!";
    }


    if (!this.state.date) {
      dateError = "* Date is Required!";
    }

    if (!this.state.fee) {
      feeError = "* Fee is Required!";
    }

    if (!this.state.paymentSlip) {
      paymentSlipError = "* Payment Slip is Required!";
    }

    
  


  if (

    courseNameError ||
    studentIDError ||
    userNameError ||
    passwordError ||
    branchError ||
    dateError ||
    feeError ||
    paymentSlipError
     
     

    ) {
      this.setState({
        courseNameError,
        studentIDError,
        userNameError,
        passwordError,
        branchError,
        dateError,
        feeError,
        paymentSlipError
      });

      return false;

    }
    return true;
  }

  onSubmit = (e) =>{
    e.preventDefault();

    const isValid = this.validate();

    const {courseName,studentID,userName,password,branch,date,fee,paymentSlip} = this.state;

    if (isValid){

    const data ={
      courseName:courseName,
      studentID:studentID,
      userName:userName,
      password:password,
      branch:branch,
      date:date,
      fee:fee,
      paymentSlip:paymentSlip
    }
        console.log(data)
    


        axios.post("http://localhost:8000/payment/save", data).then((res) => {
          swal.fire("Saved", "Payment Successfull", "success");
          if(res.data.success){
            this.setState({
                 courseName:"courseName",
                 studentID:"studentID",
                 userName:"userName",
                 password:"password",
                 branch:"branch",
                 date:"date",
                 fee:"fee",
                 paymentSlip:"paymentSlip"
              }
            )
            }
          });
        };
         };

         
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{color: 'yellow' }}>Create new payment </h1>
      <form className="needs-validation" noValidate>
        

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

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >User Name </label>
          <input type="text"
          className="form-control"
          name="userName"
          placeholder="Enter User Name"
          value={this.state.userName}
          onChange={this.handleInputChange}/>
           <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.userNameError}
        </div>
        </div>

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Password  </label>
          <input type="text"
          className="form-control"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleInputChange}/>
           <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
        </div>
        </div>

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Branch </label>
          <input type="text"
          className="form-control"
          name="branch"
          placeholder="Enter Branch Name"
          value={this.state.branch}
          onChange={this.handleInputChange}/>
          <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.branchError}
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

        <div className="form-group" style={{color:'#FFFFFF',marginBottom:'40px'}}>
          <label style={{marginBottom:'5px'}}>Payment Slip</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          <input type="text"
          className="form-control"
          name="paymentSlip"
          placeholder="Upload Payment Slip"
          value={this.state.paymentSlip}
          onChange={this.handleInputChange}/>

       <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.paymentSlipError}
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

    
  
