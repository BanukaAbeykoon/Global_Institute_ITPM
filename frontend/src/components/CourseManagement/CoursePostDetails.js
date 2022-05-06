import React, { Component } from 'react';
import axios from 'axios';

export default class CoursePostDetails extends Component {
  constructor(props){
    super(props);

  
    this.state={
      course:{}
    };
  }
  
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/course/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              course:res.data.course
            });

            console.log(this.state.course);
          }


    })
  }

  render() {
   
  const {courseName,courseID,subject,date,fee} = this.state.course;

    return (
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper"></div>
    <div className ="container-sm"></div> 
      <div style={{marginTop:'50px'}}>
        <h6>{courseName}</h6>
        <hr/>
<dl className="row">

         <dt className="col-sm-3">CourseID</dt>
         <dd className="col-sm-9">{courseID}</dd>

         <dt className="col-sm-3">Subject</dt>
         <dd className="col-sm-9">{subject}</dd>

         <dt className="col-sm-3">Date</dt>
         <dd className="col-sm-9">{date}</dd>

         <dt className="col-sm-3">Fee</dt>
         <dd className="col-sm-9">{fee}</dd>
         </dl>
      </div>
      </div>
       
    )
  }
  }
