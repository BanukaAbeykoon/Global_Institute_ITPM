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
                    <h2>Dewmi Warnakulasooriya</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Science</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>Bachelor of Science</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0772781901</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>dewmi@gmail.com</p1></h3>

                </div>

                

            </div>

            <div className="product_card">
                <img src={"academic5.jpg"}></img>

                <div className="product_box">
                    <h2>Baggya Senanayake</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Maths</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>Degree in aus uni</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0772867890</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>Senanayake@gmail.com</p1></h3>

                </div>

                

            </div>


            <div className="product_card">
                <img src={"academic1.jpg"}></img>

                <div className="product_box">
                    <h2>Hasiru Dulanjaya</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Maths</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>BSc in Maths</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0778090987</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>hasi@gmail.com</p1></h3>

                </div>

                

            </div>

            <div className="product_card">
                <img src={"academic6.png"}></img>

                <div className="product_box">
                    <h2>Deshan Amarasooriya</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Science</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>BSc in Science</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0716441398</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>deshan@gmail.com</p1></h3>
                </div>

                

            </div>

            <div className="product_card">
                <img src={"academic4.jpg"}></img>

                <div className="product_box">
                    <h2>Supipi Senethma</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Maths</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>UOK Degree</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0772779667</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>supipi@gmail.com</p1></h3>

                </div>

                

            </div>

            

            <div className="product_card">
                <img src={"academic3.jpg"}></img>

                <div className="product_box">
                    <h2>Srivanka Prabath</h2><br/>
                    <h3 style={{marginLeft:"55px"}}>Subject=<p1 style={{color:"yellow"}}>Science</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Qulification =<p1 style={{color:"yellow"}}>BSCS Biology</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Phone num =<p1 style={{color:"yellow"}}>0779597171</p1></h3>
                    <h3 style={{marginLeft:"55px"}}>Email =<p1 style={{color:"yellow"}}>srivanka@gmail.com</p1></h3>

                </div>

                

            </div>
            </div>
            
            </div>
            
       
    )
      
    
  }
}
export default StaffAcademichome;