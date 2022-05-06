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
          <div className="col-lg-9 mt-2 mb-2" >
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
            <table className="table" >
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

                  style={{ backgroundColor: "#228B22", padding: "8px" }}

                  class="btn btn-secondary btn-sm"

                  onClick={() => generatePDF(this.state.course)}

                >

                  Download As PDF

                </button>

              </div>
    
           </div>
        );
      }
    }



