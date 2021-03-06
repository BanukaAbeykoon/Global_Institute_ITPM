import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";


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
    axios.get('http://localhost:8000/student').then(res =>{
      if (res.data.success) {
        this.setState({
          student:res.data.existingstudent
        });
        
        console.log(this.state.student);
      }
    });
}
//delete student

onDelete = (id) =>{
  axios.delete(`http://localhost:8000/student/delete/${id}`).then((res) =>{
    swal.fire("Deleted", "Deleted Successfully", "success");
    this.retrievestudent();
  })
}
//search student

filterData(student,searchkey){
  
  const result = student.filter((student) =>

  student.studentName.toLowerCase().includes(searchkey) ||
  student.studentID.toLowerCase().includes(searchkey)  ||
  student.courseName.toLowerCase().includes(searchkey) 
  )

  this.setState({student:result})

}

handleSearchArea = (e) =>{

  const searchkey = (e.currentTarget.value);

  axios.get(`http://localhost:8000/student`).then(res =>{
    if (res.data.success) {
    

      this.filterData(res.data.existingstudent,searchkey)
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
        <h4>All Student Details</h4>
        </div>
        <div className ="col-lg-3 mt-2 mb-2">
          <input 
          className="form-control"
          type="search"
          placeholder="Search Students"
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
              <th scope="col">Student Name</th>
              <th scope="col">Student ID</th>
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
                    <a href={`/student/${student._id}`} style={{color: 'orange',textDecoration:'none'}}> 
                    {student.studentName} 
                    </a> 
                    </td>
                <td>{student.studentID}</td>
                <td>{student.courseName}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
               
                <td>
                  <a className="btn btn-warning" href={`/studentedit/${student._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                    &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(student._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
                </tr>
            ))}
              
               </tbody>
        </table>

       <button className="btn btn-success"><a href="/studentadd" style={{textDecoration:'none',color:'white'}}>Register New Student</a> </button> 
      </div>
    );
  }
}