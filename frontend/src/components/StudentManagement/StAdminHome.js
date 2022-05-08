import React, { Component } from "react";

class Studentdashboard extends Component {
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
                          <a className="nav-link" aria-current="page" href="/StudentHome">
                            Home -
                          </a>
                        </li>

                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/Studentdashbord" className="nav-link">
                           Student Dashboard -
                          </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                          <a href="/StudentHome" className="nav-link">
                            student Courses -
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
                  src="stadmin.jpg"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Students</h5>
                  <p class="card-text">
                  The	Student	Administration	section	is	responsible	for	all	central	administrative	functions	involved.
                  </p>
                  {/* <a href="/CourseHome" class="btn btn-primary"> */}
                  <button className="btn btn-success"><a href="StudentHome" style={{textDecoration:'none',color:'white'}}> Students</a> </button>
                   
                  {/* </a> */}
                </div>
              </div>
            </div>
           
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="rp.jpg"
                  width="900"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Reportes</h5>
                  <p class="card-text">
                  These reports are meant to show the students progress in the classroom, and display the grade that the student has earned in each subject.
                  </p>
                  <button className="btn btn-success"><a href="/StReports" style={{textDecoration:'none',color:'white'}}> Reportes</a> </button>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <img
                  src="plan.jpg"
                  width="900"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Academic Planner</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button className="btn btn-success"><a href="/StReports" style={{textDecoration:'none',color:'white'}}> Academic Planner</a> </button>
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

export default Studentdashboard;
