import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";



const generatePDF = (student) => {

    const doc = new jsPDF();
  
    const tableColumn = [
  
      "studentName",
  
      "studentID",
  
      "courseName",
  
      "email",
  
      "phone",

      
  
    ];
  
    const tableRows = [];
  
  
  
    student.map((student) => {
  
      const studentdata = [
  
        student.studentName,
  
        student.studentID,
  
        student.courseName,
  
        student.email,
  
        student.phone,
  
      ];
  
      tableRows.push(studentdata);
  
    });


    doc.text("GLOBAL EDUCATION INSTITUTE<", 70, 8).setFontSize(13);

  doc.text("student Details Report", 14, 16).setFontSize(13);

  doc.autoTable(tableColumn, tableRows, {

    styles: { fontSize: 8 },

    startY: 35,

  });

  doc.save("students details.pdf");

};


export default class StudentHome extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        student: [],
      };
    }
  
    componentDidMount() {
      this.retrievestudent();
    }
  
    retrievestudent() {
      axios.get("http://localhost:8000/student").then((res) => {
        if (res.data.success) {
          this.setState({
            student: res.data.existingstudent,
          });
  
          console.log(this.state.student);
        }
      });
    }
  
   
  
    filterData(student, searchKey) {
      const result = student.filter(
        (student) =>
        student.studentName.toLowerCase().includes(searchKey) ||
        student.studentID.toLowerCase().includes(searchKey) ||
        student.courseName.toLowerCase().includes(searchKey)
      );
      this.setState({ student: result });
    }
  
    handleSearchArea = (e) => {
      const searchKey = e.currentTarget.value;
  
      axios.get(`http://localhost:8000/student`).then((res) => {
        if (res.data.success) {
          this.filterData(res.data.existingPosts, searchKey);
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
            <h4>All student Details</h4>
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
                  <th scope="col">student Name</th>
                  <th scope="col">student ID</th>
                  <th scope="col">Course Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone No</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.student.map((student,index) => (
                    <tr key={index}>
               
                    <th scope="row">{index+1}</th>
                    
                    <td>
                        <a href={`/student/${student._id}`} style={{color: 'yellow',textDecoration:'none'}}> 
                        {student.studentName} 
                        </a> 
                        </td>
                    <td>{student.studentID}</td>
                    <td>{student.courseName}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                   
                    
                    </tr>
                ))}
                  
                   </tbody>
            </table>
            <div style={{ float: "left" }}>

                <button

                  type="button"

                  style={{ backgroundColor: "#228B22", padding: "8px" }}

                  class="btn btn-secondary btn-sm"

                  onClick={() => generatePDF(this.state.student)}

                >

                  Downloard As PDF

                </button>

              </div>
    
            
          </div>
        );
      }
    }