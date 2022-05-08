import React, { Component } from "react";
import "./StaffDashboard.css";

class StaffDashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>
          {/* add nav bar */}
          
          <br />
          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="staff.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  {/* <a href="/StaffHome" class="btn btn-primary"> */}
                  <button className="card-button">
                    <a
                      href="/StaffAcademichome"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Academic Staff
                    </a>{""}
                  </button>

                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="non4.jpeg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                <button className="card-button">
                  <a href="/StaffNonacademichome" style={{ textDecoration: "none", color: "white" }}>
                    NonAcademic Staff
                  </a>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="report.png"
                  width="500"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                <button className="card-button">
                  <a href="/StaffReport" style={{ textDecoration: "none", color: "white" }}>
                    Report
                  </a>
                  </button>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default StaffDashboard;