import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";

export default class PaymentEditPost extends Component {
  
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
      paymentSlip:""
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

    const {courseName,studentID,userName,password,branch,date,fee,paymentSlip} = this.state;

    const data ={
      courseName:courseName,
      studentID:studentID,
      userName:userName,
      password:password,
      branch:branch,
      date:date,
      fee:fee,
      paymentSlip:paymentSlip,
    }

        console.log(data);
    


        axios.put(`http://localhost:8000/payment/update/${id}`, data).then((res) => {
          if(res.data.success){
            swal.fire("Updated", "updated Successfully", "success");
            this.setState({
              courseName:"courseName",
              studentID:"studentID",
              userName:"userName",
              password:"password",
              branch:"branch",
              date:"date",
              fee:"fee",
              paymentSlip:"paymentSlip",
              }
            )
            }
          });
         };

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/payment/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              
              courseName:res.data.payment.courseName,
              studentID:res.data.payment.studentID,
              userName:res.data.payment.userName,
              password:res.data.payment.password,
              branch:res.data.payment.branch,
              date:res.data.payment.date,
              fee:res.data.payment.fee,
              paymentSlip:res.data.payment.paymentSlip,

            });

            console.log(this.state.payment);
          };


    });
  };
  
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{color:'yellow'}}>Edit Payment</h1>
      <form className="needs-validation" noValidate>
       

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course Name </label>
          <input type="text"
          readOnly
          className="form-control"
          name="courseName"
          placeholder="Enter Course Name"
          value={this.state.courseName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Student ID </label>
          <input type="text"
          className="form-control"
          name="studentID"
          placeholder="Enter Student ID"
          value={this.state.studentID}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >User Name </label>
          <input type="text"
          className="form-control"
          name="userName"
          placeholder="Enter User Name"
          value={this.state.userName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Password</label>
          <input type="password"
          className="form-control"
          name="password"
          placeholder="Enter Password"
          value={this.state.password}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Branch</label>
          <input type="text"
          className="form-control"
          name="branch"
          placeholder="Enter Branch"
          value={this.state.branch}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Date</label>
          <input type="date"
          className="form-control"
          name="date"
          placeholder="Enter Date"
          value={this.state.date}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Fee</label>
          <input type="text"
          className="form-control"
          name="fee"
          placeholder="Enter Fee"
          value={this.state.fee}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Payment Slip</label>
          <input type="text"
          className="form-control"
          name="paymentSlip"
          placeholder="Enter Payment slip"
          value={this.state.paymentSlip}
          onChange={this.handleInputChange}/>
        </div>

        <button className="btn btn-success" type="submit" style={{color:'#FFFFFF',marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
       
    
    
   
     </form>
    </div>
    
    
    );
  };
};


    
  

