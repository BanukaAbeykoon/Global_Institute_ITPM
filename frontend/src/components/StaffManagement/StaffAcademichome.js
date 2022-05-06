import React, { Component } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';
import "./Academic.css";

class StaffAcademichome extends Component {

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
            <h4>Academic Dashboard</h4>
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
                <img src={"academic7.png"}></img>

                <div className="product_box">
                    <h2>Dewmi Warnakulasooriya</h2>
                    <p>Science</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="/">View</Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"academic5.jpg"}></img>

                <div className="product_box">
                    <h2>Baggya Senanayake</h2>
                    <p>Maths</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View</Link>
                    
                </div>

            </div>


            <div className="product_card">
                <img src={"academic1.jpg"}></img>

                <div className="product_box">
                    <h2>Hasiru Dulanjaya</h2>
                    <p>Maths</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"academic6.png"}></img>

                <div className="product_box">
                    <h2>Deshan Amarasooriya</h2>
                    <p>Science</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            <div className="product_card">
                <img src={"academic4.jpg"}></img>

                <div className="product_box">
                    <h2>Supipi Senethma</h2>
                    <p>Maths</p>
                </div>

                <div className="row_btn">
                    <Link id="btn_view" to="#!">View </Link>
                    
                </div>

            </div>

            

            <div className="product_card">
                <img src={"academic3.jpg"}></img>

                <div className="product_box">
                    <h2>Sashintha Dasanayaka</h2>
                    <p>Science</p>
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

export default StaffAcademichome;