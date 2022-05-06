import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



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
    axios.get('http://localhost:8000/course').then(res =>{
      if (res.data.success) {
        this.setState({
          course:res.data.existingcourse
        });
        
        console.log(this.state.course);
      }
    });
}


onDelete = (id) =>{
  axios.delete(`http://localhost:8000/course/delete/${id}`).then((res) =>{
    swal.fire("Deleted", "deleted Successfully", "success");
    this.retrievecourse();
  })
}

filterData(course,searchkey){
  
  const result = course.filter((course) =>

  course.courseName.toLowerCase().includes(searchkey) ||
  course.subject.toLowerCase().includes(searchkey)  ||
  course.fee.toLowerCase().includes(searchkey) 
  )

  this.setState({course:result})

}

handleSearchArea = (e) =>{

  const searchkey = (e.currentTarget.value);

  axios.get(`http://localhost:8000/course`).then(res =>{
    if (res.data.success) {
    

      this.filterData(res.data.existingcourse,searchkey)
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.course.map((course,index) => (
                <tr key={index}>
           
                <th scope="row">{index+1}</th>
                
                <td>
                    <a href={`/course/${course._id}`} style={{color: '#00CED1',textDecoration:'none'}}> 
                    {course.courseName} 
                    </a> 
                    </td>
                <td>{course.courseID}</td>
                <td>{course.subject}</td>
                <td>{course.date}</td>
                <td>{course.fee}</td>
               
                <td>
                  <a className="btn btn-warning" href={`/edit/${course._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                    &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(course._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
                </tr>
            ))}
              
               </tbody>
        </table>

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Course</a> </button> 
      </div>
    );
  }
}