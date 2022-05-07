import React, { Component } from 'react';
import axios from 'axios';

export default class StudentPostDetails extends Component {
  constructor(props){
    super(props);

  
    this.state={
      student:{}
    };
  }
  
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/student/${id}`).then((res) =>{
          if(res.data.success){
            this.setState({
              student:res.data.student
            });

            console.log(this.state.student);
          }


    })
  }

  render() {
   
  const {studentName,studentID,courseName,email,phone} = this.state.student;

    return (
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper"></div>
    <div className ="container-sm"></div> 
      <div style={{marginTop:'50px'}}>
        <h6>{studentName}</h6>
        <hr/>
<dl className="row">

         <dt className="col-sm-3">StudentID</dt>
         <dd className="col-sm-9">{studentID}</dd>

         <dt className="col-sm-3">courseName</dt>
         <dd className="col-sm-9">{courseName}</dd>

         <dt className="col-sm-3">Email</dt>
         <dd className="col-sm-9">{email}</dd>

         <dt className="col-sm-3">phone</dt>
         <dd className="col-sm-9">{phone}</dd>
         </dl>
      </div>
      </div>
       
    )
  }
  }
