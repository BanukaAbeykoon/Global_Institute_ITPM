import React, { Component } from "react";

class MainDashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="1">
          <div className="12">
            <div className="123">
              <h2>
                {" "}
                <center>
                  {" "}
                  <br />
                  <div className="123" style={{ color: "yellow" }}>
                    <h1 class="display-2">GLOBAL EDUCATION INSTITUTE</h1>
                  </div>
                  <br />
                </center>{" "}
              </h2>
              <hr />
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="st.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Student Management</h5>

                      <a href="/Studentdashboard" class="btn btn-primary">
                        Student Management
                      </a>
                    </div>
                  </div>
                  <br />
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="stp.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Staff Management</h5>

                      <a href="/StaffLogin" class="btn btn-primary">
                        Staff Management
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="pay.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Payment Management</h5>

                      <a href="/Paymentdashboard" class="btn btn-primary">
                        Payment Management
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="cse.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Courses Management</h5>

                      <a href="/Coursedashboard" class="btn btn-primary">
                        Courses Management
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="lbr.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Library Management</h5>

                      <a href="/LBDashboard" class="btn btn-primary">
                        Library Management
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="sch.jpg "
                      width="200"
                      height="200"
                      position="absolute"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Schedulers Management</h5>

                      <a href="/RMDashbord" class="btn btn-primary">
                        Schedulers Management
                      </a>
                    </div>
                  </div>
                  <br />
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
              </div>{" "}
              &nbsp; &nbsp;
            </div>
            &nbsp; &nbsp;
          </div>
          &nbsp; &nbsp;
        </div>
        &nbsp; &nbsp;
      </div>
    );
  }
}

export default MainDashboard;
