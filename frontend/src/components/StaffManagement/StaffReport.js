import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (staff) => {

    const doc = new jsPDF();
    const tableColumn = [
  
        "name",
        "subject",
        "qulification",
        "phonenumber",
        "email",
        "password",
  
    ];
  
    const tableRows = [];
    staff.map((staff) => {
  
      const staffdata = [
  
        staff.name,
        staff.subject,
        staff.qulification,
        staff.phonenumber,
        staff.email,
        staff.password,
    ];
  
      tableRows.push(staffdata);
  
    });

    doc.text("GLOBAL EDUCATION INSTITUTE<", 70, 8).setFontSize(13);
    doc.text("Staff Details Report", 14, 16).setFontSize(13);
    doc.autoTable(tableColumn, tableRows, {
    styles: { fontSize: 8 },

    startY: 35,

  });

    doc.save("Staff details.pdf");

};

export default class StaffAdminHome extends Component {
    constructor(props){
      super(props);
    
      this.state={
        staff:[]
        
      };
    }
    
    componentDidMount(){
      this.retrieveStaff();
    }
    
    retrieveStaff(){
      axios.get("http://localhost:8000/staff").then(res=>{
        if(res.data.success){
          this.setState({
            staff:res.data.existingStaff
          });
    
          console.log(this.state.staff)
        }
      });
    }
  
   
  
    filterData(staff,searchKey){

        const result = staff.filter((staff) =>
      
          staff.name.includes(searchKey)||
          staff.subject.includes(searchKey)||
          staff.qulification.includes(searchKey)||
          staff.email.includes(searchKey)||
      
          staff.name.toLowerCase().includes(searchKey)||
          staff.subject.toLowerCase().includes(searchKey)||
          staff.qulification.toLowerCase().includes(searchKey)||
          staff.email.toLowerCase().includes(searchKey)
      
        )
      
        this.setState({staff:result})
      
      }
  
      handlesearchArea = (e) =>{

        const searchkey = e.currentTarget.value;
        
        axios.get("http://localhost:8000/staff").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingStaff,searchkey)
          }
        })
       }

       render() {
        return (
          <div id="wrapper" className="toggled">
    
            <div id="page-content-wrapper"></div>
    
          <div className ="container-sm"></div>
    
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2" style={{color: 'yellow'}}>
                <h4>Staff Members</h4>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <input
                className="form-control"
                type="search"
                placeholder="search"
                name="searchQuery"
                onChange={this.handlesearchArea}>
                </input>
    
              </div>
    
            </div>
            
            <table className="table table-hover" style={{color: '#FFFFFF',marginTop:'40px'}}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Qulification</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.staff.map((staff,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                        <a href={`//${staff._id}`} style={{color: '#00CED1',textDecoration:'none'}}>
                        {staff.name}
                        </a>
                        
                    </td>
                    <td>{staff.subject}</td>
                    <td>{staff.qulification}</td>
                    <td>{staff.phonenumber}</td>
                    <td>{staff.email}</td>
                    <td>{staff.password}</td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </table>
              
            <div style={{ float: "left" }}>
                <button
                  type="button"
                  style={{ backgroundColor: "#228B22", padding: "8px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.staff)}
                >
                  Downlode As PDF
                </button>   
            
    
          </div>
          </div>
        )
      }
    }