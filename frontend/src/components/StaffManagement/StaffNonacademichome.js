import React, { Component } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';
import "./Academic.css";

class StaffNonacademichome extends Component {

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
       
       axios.get("/staff").then(res=>{
         if(res.data.success){
           this.filterData(res.data.existingstaff,searchkey)
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
            <h4>Non Academic Dashboard</h4>
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
            
            <div class="row">
            <div className="product_card">
                <img src={"nonacademic1.jpg"}></img>

                <div className="product_box">
                    <h2>Shaini Nissanka</h2>
                    <p>Receptionist</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="/">View</Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"nonacademic8.jpg"}></img>

                <div className="product_box">
                    <h2>Tharidu Senevirathna</h2>
                    <p>Student Admin Manager</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View</Link>
                    
                </div>

            </div>


            <div className="product_card">
                <img src={"nonacademic7.jpg"}></img>

                <div className="product_box">
                    <h2>Hasiru Amarasooriya</h2>
                    <p>Staff Admin Manager</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"nonacademic6.jpg"}></img>

                <div className="product_box">
                    <h2>Banuka Abeykoon</h2>
                    <p>Cource Manager</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"nonacademic3.jpg"}></img>

                <div className="product_box">
                    <h2>Lahiru Dhanushanka</h2>
                    <p>librarian</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            

            <div className="product_card">
                <img src={"nonacademic2.jpeg"}></img>

                <div className="product_box">
                    <h2>Sunethya</h2>
                    <p>Accounter</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View</Link>
                    

                </div>

            </div>
            </div>
            
            </div>
            
       
    )
      
    
  }
}

export default StaffNonacademichome;