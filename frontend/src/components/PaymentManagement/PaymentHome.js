import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";


export default class PaymentHome extends Component {
  
 
  constructor(props) {
    super(props);

    this.state = {
      payment: [],
    };
  }

  componentDidMount() {
    this.retrievepayment();
}

  retrievepayment() {
    axios.get('http://localhost:8000/payment').then(res =>{
      if (res.data.success) {
        this.setState({
          payment:res.data.existingpayment
        });
        
        console.log(this.state.payment);
      }
    });
}


onDelete = (id) =>{
  axios.delete(`http://localhost:8000/payment/delete/${id}`).then((res) =>{
    swal.fire("Deleted", "deleted Successfully", "success");
    this.retrievepayment();
  })
}

filterData(payment,searchkey){
  
  const result = payment.filter((payment) =>

  payment.courseName.toLowerCase().includes(searchkey) ||
  payment.studentID.toLowerCase().includes(searchkey)  ||
  payment.userName.toLowerCase().includes(searchkey) 
  )

  this.setState({payment:result})

}

handleSearchArea = (e) =>{

  const searchkey = (e.currentTarget.value);

  axios.get(`http://localhost:8000/payment`).then(res =>{
    if (res.data.success) {
    

      this.filterData(res.data.existingpayment,searchkey)
}
  });
}


  render() {
    
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper"></div>
      <div className ="container-sm">
      <div className="row">
      <div className="col-lg-9 mt-2 mb-2" style={{color: 'yellow'}}>
        <h4>All Payments</h4>
        </div>
        <div className ="col-lg-3 mt-2 mb-2">
          <input 
          className="form-control"
          type="search"
          placeholder="search"
          name="searchQuery"
          onChange ={this.handleSearchArea}>

          </input>
          </div>
          </div>
          </div>
        <table className="table" style={{color: '#FFFFFF',marginTop:'40px'}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Student ID</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Branch </th>
              <th scope="col">Date</th>
              <th scope="col">Fee</th>
              <th scope="col">Payment Slip </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.payment.map((payment,index) => (
                <tr key={index}>
           
                <th scope="row">{index+1}</th>
                
                <td>
                    <a href={`/payment/${payment._id}`} style={{color: '#00CED1',textDecoration:'none'}}> 
                    {payment.courseName} 
                    </a> 
                    </td>
                <td>{payment.studentID}</td>
                <td>{payment.userName}</td>
                <td>{payment.password}</td>
                <td>{payment.branch}</td>
                <td>{payment.date}</td>
                <td>{payment.fee}</td>
                <td>{payment.paymentSlip}</td>
               
                <td>
                  <a className="btn btn-warning" href={`/Paymentedit/${payment._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                    &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(payment._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
                </tr>
            ))}
              
               </tbody>
        </table>

       <button className="btn btn-success"><a href="/Paymentadd" style={{textDecoration:'none',color:'white'}}>Create New Payment</a> </button> 
      </div>
    );
  }
}