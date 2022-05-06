import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";

export default class CourseEditPost extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      courseName:"",
      courseID:"",
      subject:"",
      date:"",
      fee:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;
      
      this.setState({
        ...this.state,
        [name]: value,
      });
  };

  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;

    const {courseName,courseID,subject,date,fee} = this.state;

    const data ={
      courseName:courseName,
      courseID:courseID,
      subject:subject,
      date:date,
      fee:fee
    }

        console.log(data);
    


        axios.put(`http://localhost:8000/course/update/${id}`, data).then((res) => {
          if(res.data.success){
            swal.fire("Updated", "updated Successfilly", "success");
            this.setState({
                 courseName:"courseName",
                 courseID:"courseID",
                 subject:"subject",
                 date:"date",
                 fee:"fee"
              }
            )
            }
          });
         };

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/course/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              
              courseName:res.data.course.courseName,
              courseID:res.data.course.courseID,
              subject:res.data.course.subject,
              date:res.data.course.date,
              fee:res.data.course.fee

            });

            console.log(this.state.course);
          };


    });
  };
  
  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" style={{color:'yellow'}}>Edit course</h1>
      <form className="needs-validation" noValidate>
       

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course ID </label>
          <input type="text"
          readOnly
          className="form-control"
          name="courseID"
          placeholder="Enter course ID"
          value={this.state.courseID}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Course Name </label>
          <input type="text"
          className="form-control"
          name="courseName"
          placeholder="Enter Course Name"
          value={this.state.courseName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}} >Subject </label>
          <input type="text"
          className="form-control"
          name="subject"
          placeholder="Enter Subject"
          value={this.state.subject}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Date</label>
          <input type="text"
          className="form-control"
          name="date"
          placeholder="Enter Date"
          value={this.state.date}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{color:'#FFFFFF' ,marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Fee</label>
          <input type="text"
          className="form-control"
          name="fee"
          placeholder="Enter Fee"
          value={this.state.fee}
          onChange={this.handleInputChange}/>
        </div>

        <button className="btn btn-success" type="submit" style={{color:'#FFFFFF',marginTop:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
       
    
    
   
     </form>
    </div>
    
    
    );
  };
};


    
  

