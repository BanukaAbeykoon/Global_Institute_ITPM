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
                            Student Home
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
                  src="fac.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Faculties</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  {/* <a href="/CourseHome" class="btn btn-primary"> */}
                  <button className="btn btn-success"><a href="#" style={{textDecoration:'none',color:'white'}}> Faculties</a> </button>
                   
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="course.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Course</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
               Course
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="lib.jpg"
                  width="300"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Library</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <button className="btn btn-success"><a href="#" style={{textDecoration:'none',color:'white'}}> Library</a> </button>
                </div>

              </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <div class="row">

          <div class="col-sm-4">
              <div class="card">
                <img
                  src="ass.jpg"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Assignment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  {/* <a href="/CourseHome" class="btn btn-primary"> */}
                  <button className="btn btn-success"><a href="#" style={{textDecoration:'none',color:'white'}}> Assignment</a> </button>
                   
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <img
                  src="re.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Resources</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
               Resorces
                  </a>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="card">
                <img
                  src="sup.png"
                  width="400"
                  height="400"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Support service</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
               Support Service
                  </a>
                </div>
              </div>
            </div>








          </div>
          
        </div>
      </div>
    );
  }
}

export default Studentdashboard;
