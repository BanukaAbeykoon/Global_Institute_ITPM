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

Download As
                  <div class="docs">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="20"
                      width="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line y2="13" x2="8" y1="13" x1="16"></line>
                      <line y2="17" x2="8" y1="17" x1="16"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{" "}
                    PDF
                  </div>
                  <div class="download">
                    <svg
                      class="css-i6dzq1"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      fill="none"
                      stroke-width="2"
                      stroke="currentColor"
                      height="50"
                      width="50"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line y2="3" x2="12" y1="15" x1="12"></line>
                    </svg>
                  </div>


                </button>

              </div>
    
           </div>
        );
      }
    }



