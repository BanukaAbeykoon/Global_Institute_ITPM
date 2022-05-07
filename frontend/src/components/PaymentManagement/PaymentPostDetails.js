import React, { Component } from 'react';
import axios from 'axios';

export default class PaymentPostDetails extends Component {
  constructor(props){
    super(props);

  
    this.state={
      payment:{}
    };
  }
  
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/payment/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              payment:res.data.payment
            });

            console.log(this.state.payment);
          }


    })
  }

  render() {
   
  const {courseName,studentID,userName,password,branch,date,fee,paymentSlip} = this.state.payment;

    return (
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper"></div>
    <div className ="container-sm"></div> 
      <div style={{marginTop:'50px'}}>
        <h6>{courseName}</h6>
        <hr/>
<dl className="row">

         <dt className="col-sm-3">StudentID</dt>
         <dd className="col-sm-9">{studentID}</dd>

         <dt className="col-sm-3">UserName</dt>
         <dd className="col-sm-9">{userName}</dd>

         <dt className="col-sm-3">Password</dt>
         <dd className="col-sm-9">{password}</dd>

         <dt className="col-sm-3">Branch</dt>
         <dd className="col-sm-9">{branch}</dd>

         <dt className="col-sm-3">Date</dt>
         <dd className="col-sm-9">{date}</dd>

         <dt className="col-sm-3">Fee</dt>
         <dd className="col-sm-9">{fee}</dd>

         <dt className="col-sm-3">PaymentSlip</dt>
         <dd className="col-sm-9">{paymentSlip}</dd>
         </dl>
      </div>
      </div>
       
    )
  }
  }
