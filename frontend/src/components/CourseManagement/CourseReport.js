import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (course) => {
    const doc = new jsPDF();
    const tableColumn = [
  
      "courseName",
      "courseID",
      "subject",
      "date",
      "fee",
    ];
  
    const tableRows = [];
  
    course.map((course) => {
      const coursedata = [
      course.courseName,
      course.courseID,
      course.subject,
      course.date,
      course.fee,
  
      ];
  
      tableRows.push(coursedata);
  
    });

doc.text("GLOBAL EDUCATION INSTITUTE", 70, 8).setFontSize(13);
doc.text("Course Details Report", 14, 16).setFontSize(13); 
doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8 }, startY: 35,});
doc.save("Course details.pdf");};

export default class CourseHome extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        course: [],
      };
    }
  
    componentDidMount() {
      this.retrievecourse();
    }
  
    retrievecourse() {
      axios.get("http://localhost:8000/course").then((res) => {
        if (res.data.success) {
          this.setState({
            course: res.data.existingcourse,
          });
  
          console.log(this.state.course);
        }
      });
    }
  
   
  
    filterData(course, searchKey) {
      const result = course.filter(
        (course) =>
        course.courseName.toLowerCase().includes(searchKey) ||
        course.subject.toLowerCase().includes(searchKey) ||
        course.fee.toLowerCase().includes(searchKey)
      );
      this.setState({ course: result });
    }
  
    handleSearchArea = (e) => {
      const searchKey = e.currentTarget.value;
  
      axios.get(`http://localhost:8000/course`).then((res) => {
        if (res.data.success) {
          this.filterData(res.data.existingcourse, searchKey);
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
            <h4>All Courses</h4>
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
                  <th scope="col">Course ID</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Date</th>
                  <th scope="col">Fee </th>
                 
                </tr>
              </thead>
              <tbody>
                {this.state.course.map((course,index) => (
                    <tr key={index}>
               
                    <th scope="row">{index+1}</th>
                    
                    <td>{course.courseName} </td>
                    <td>{course.courseID}</td>
                    <td>{course.subject}</td>
                    <td>{course.date}</td>
                    <td>{course.fee}</td>
                   
                    
                    </tr>
                ))}
                  
                   </tbody>
            </table>

            <div style={{ float: "left" }}>

                <button

                  type="button"

                  style={{ backgroundColor: "#E74C3C", padding: "2px" }}

                  class="btn btn-secondary btn-sm"

                  onClick={() => generatePDF(this.state.course)}

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



