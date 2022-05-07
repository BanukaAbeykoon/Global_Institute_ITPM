import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (payment) => {
    const doc = new jsPDF();
    const tableColumn = [
  
      "courseName",
      "studentID",
      "userName",
      "password",
      "branch",
      "date",
      "fee",
      "paymentSlip",
    ];
  
    const tableRows = [];
  
    payment.map((payment) => {
      const paymentdata = [
        payment.courseName,
        payment.studentID,
        payment.userName,
        payment.password,
        payment.branch,
        payment.date,
        payment.fee,
        payment.paymentSlip,
  
      ];
  
      tableRows.push(paymentdata);
  
    });

doc.text("GLOBAL EDUCATION INSTITUTE", 70, 8).setFontSize(13);
doc.text("Payment Details Report", 14, 16).setFontSize(13); 
doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35,});
doc.save("Payment details.pdf");};

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
      axios.get("http://localhost:8000/payment").then((res) => {
        if (res.data.success) {
          this.setState({
            payment: res.data.existingpayment,
          });
  
          console.log(this.state.payment);
        }
      });
    }
  
   
  
    filterData(payment, searchKey) {
      const result = payment.filter(
        (course) =>
        payment.courseName.toLowerCase().includes(searchKey) ||
        payment.studentID.toLowerCase().includes(searchKey) ||
        payment.userName.toLowerCase().includes(searchKey) ||
        payment.password.toLowerCase().includes(searchKey) ||
        payment.branch.toLowerCase().includes(searchKey) ||
        payment.date.toLowerCase().includes(searchKey) ||
        payment.fee.toLowerCase().includes(searchKey) ||
        payment.paymentSlip.toLowerCase().includes(searchKey) 
      );
      this.setState({ payment: result });
    }
  
    handleSearchArea = (e) => {
      const searchKey = e.currentTarget.value;
  
      axios.get(`http://localhost:8000/payment`).then((res) => {
        if (res.data.success) {
          this.filterData(res.data.existingpayment, searchKey);
        }
      });
    };

    render() {
    
        return (
          <div id="wrapper" className="toggled">
            <div id="page-content-wrapper"></div>
          <div className ="container-sm">
          <div className="row">
          <div className="col-lg-9 mt-2 mb-2" >
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
            <table className="table" >
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
                 
                </tr>
              </thead>
              <tbody>
                {this.state.payment.map((payment,index) => (
                    <tr key={index}>
               
                    <th scope="row">{index+1}</th>
                    
                <td>{payment.courseName} </td>
                <td>{payment.studentID}</td>
                <td>{payment.userName}</td>
                <td>{payment.password}</td>
                <td>{payment.branch}</td>
                <td>{payment.date}</td>
                <td>{payment.fee}</td>
                <td>{payment.paymentSlip}</td>
                   
                    
                    </tr>
                ))}
                  
                   </tbody>
            </table>

            <div style={{ float: "left" }}>

                <button

                  type="button"

                  style={{ backgroundColor: "#228B22", padding: "8px" }}

                  class="btn btn-secondary btn-sm"

                  onClick={() => generatePDF(this.state.payment)}

                >

                  Download As PDF

                </button>

              </div>
    
           </div>
        );
      }
    }



