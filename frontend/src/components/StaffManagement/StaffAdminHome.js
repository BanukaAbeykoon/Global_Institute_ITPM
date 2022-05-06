import React, {Component} from 'react';
import axios from 'axios';
import swal from "sweetalert2";


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

onDelete = (id) =>{
  axios.delete(`http://localhost:8000/staff/delete/${id}`).then((res) =>{
    swal.fire("Deleted", "deleted Successfully", "success");
    this.retrieveStaff();
  })
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
              <th scope="col">Action</th>
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
                
                <td>
                  <a className="btn btn-warning" href={`/staffedit/${staff._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(staff._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
       <button className="btn btn-success">
           <a href="/StaffAdminCreatePost" style={{textDecoration:'none',color:'white'}}>Create New Members
            </a>
        </button>   
        

      </div>
    )
  }
}

