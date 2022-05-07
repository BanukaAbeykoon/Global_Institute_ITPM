import React, { Component } from "react";

class Coursedashboard extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
          <div className="container-fluid"></div>
{/* add nav bar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 mt-2 mb-2">
                <nav
                  className="navbar navbar-expand-lg navbar-light"
                  style={{
                    backgroundColor: "#e3f2fd",
                    width: "134%",
                    border: " solid #5f9ea0",
                    padding: "0px",
                  }}
                >
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toogle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Tooggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="/CourseHome">
                            Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/Coursedashbord" className="nav-link">
                           Course Dashboard -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/CourseHome" className="nav-link">
                            Regular Courses -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/addph" className="nav-link">
                            Dash Board -
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="cs.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Courses</h5>
                  <p class="card-text">
                  A course description is a brief summary of the significant learning experiences for a course.
                   Course descriptions appear in individual 
                  Course Outlines and in the Program of Studies (POSs) for individual programs.
                  </p>
                  {/* <a href="/CourseHome" class="btn btn-primary"> */}
                  <button className="btn btn-primary"><a href="/Enrol" style={{textDecoration:'none',color:'white'}}>All Courses</a> </button>
                   
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="py.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Payments</h5>
                  <p class="card-text">
                  Payment is the transfer of money or goods and services in exchange for a product or service. 
                  Payments are typically made after the terms have been agreed upon by all parties involved.
                   
                  </p>
                  <a href="#" class="btn btn-primary">
               Payments
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="rp.jpg"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Reporting</h5>
                  <p class="card-text">
                  Types of reports include memos, meeting minutes, expense reports, 
                  audit reports, closure reports, progress reports, justification reports, compliance reports, 
                  annual reports, and feasibility reports.
                  </p>
                  <a href="/CourseReport" class="btn btn-primary">
                    Report
                  </a>
                </div>
              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coursedashboard;
