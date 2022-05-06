import React, {Component} from 'react';
import axios from 'axios';




export default class StaffPostDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      staff:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/staff/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({
          staff:res.data.staff
        });

        console.log(this.state.staff);
      }
    });
  }
  render(){

    const {name,subject,qulification,phonenumber,email,password}=this.state.staff;

    return(
    <div style={{marginTop:'20px'}}>
    <h4>{name}</h4>
    <hr/>

    <dl className="row">
      <dt className="col-sm-3">Subject</dt>
      <dd className="col-sm-9">{subject}</dd>
      
      <dt className="col-sm-3">Qulification</dt>
      <dd className="col-sm-9">{qulification}</dd>

      <dt className="col-sm-3">Phone Number</dt>
      <dd className="col-sm-9">{phonenumber}</dd>

      <dt className="col-sm-3">Email</dt>
      <dd className="col-sm-9">{email}</dd>

      <dt className="col-sm-3">password</dt>
      <dd className="col-sm-9">{password}</dd>

    </dl>
    </div>
    )}

  
}

