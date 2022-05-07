import React, { Component } from "react";
import "./NavBar.css";

class SideNav extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            
            &nbsp; &nbsp; &nbsp;
            <img
              src="%PUBLIC_URL%../../../global.png"
              
              class="rounded-circle"
              width="200"
              height="200"
              alt=""
            />
            <br />
            <br />
          

            <li>
            <div className="dropdown">
                <button className="dropbtn">
              
                <i class="fas fa-sort-amount-up-alt"></i>
                &nbsp; STUDENTS
                </button>
                  <div className="dropdown-content">
                  <a href="/Studentdashboard">Dashboard</a>
                  <a href="/StudentHome">Student Home</a>
                  
                  </div>
              </div>
             
            </li>
            <br/>
            <li>
            <div className="dropdown">
                <button className="dropbtn">
             
                <i class="fas fa-sort-amount-up-alt"></i>
                &nbsp; STAFF
                </button>
                  <div className="dropdown-content">
                  <a href="/StaffLogin">Dashboard</a>
                  <a href="/StaffAcademichome">Academic Home</a>
                  <a href="/StaffNonacademichome">NonAcademic Home</a>
                  <a href="/StaffReport">Report</a>
                  </div>
              </div>
            </li>
            <br/>
            
              
              <li>
              <div className="dropdown">
                <button className="dropbtn">
               
                  <i class="fas fa-cubes"></i>
                  &nbsp; COURSES
                  </button>
                  <div className="dropdown-content">
                  <a href="/Coursedashboard">Dashboard</a>
                  <a href="/CourseHome">Courses Home</a>
                  <a href="/HomeLSmaterial">Paymets</a>
              
             
            
            </div>
            </div>
            </li>
            <br/>
            <li>
            <div className="dropdown">
                <button className="dropbtn">
                <i class="fab fa-product-hunt"></i>
                &nbsp; PAYMENTS
                </button>
                  <div className="dropdown-content">
                  <a href="/Coursedashboard">Dashboard</a>
                  <a href="/CourseHome">Courses Home</a>
                  <a href="/HomeLSmaterial">Paymets</a>
              
             
            
            </div>
            </div>
              
            </li>
            <br/>
            <li>
            <div className="dropdown">
                <button className="dropbtn">

                  <i class="fas fa-sort-amount-up-alt"></i>
                  &nbsp; LIBRARY
                  </button>
                  <div className="dropdown-content">
                  <a href="/LBDashboard">Dashboard</a>
                  <a href="/LBrowse">Browse For Books</a>
                  <a href="/LReserve">Reserved Books</a>
                  <a href="/LReport">Report</a>
              
             
            
            </div>
            </div>
                 
               
               
                  
                
            </li>
            <br/>
            <li>
            <div className="dropdown">
               
              <button className="abtn">
                <i class="fas fa-tasks"></i>
                &nbsp; ADMIN
               
               </button>
                  <div className="dropdown-content">
                  <a href="/StaffAdminHome">Staff Admin Page</a>
              
             
            
            </div>
            </div>
             
            </li>
            <br/>
            <li>
            <div className="dropdown">
                <button className="dropbtn">
                <i class="fas fa-file-invoice-dollar"></i>
                &nbsp; REPORTS
                </button>
                  <div className="dropdown-content">
                  <a href="/Streport">Student</a>
                  <a href="/StaffReport">Staff</a>
                  <a href="/CourseReport">Courses</a>
                  <a href="/LBReport">Library</a>
              
             
            
            </div>
            </div>
             
            </li>
            <br/>
        
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#"></a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-question-circle"></i>
                    &nbsp; HELP
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fas fa-phone-square"></i> &nbsp;Contact
                  </a>
                </li>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    <i class="fas fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="%PUBLIC_URL%../../../user.png"
                        class="rounded-circle"
                        width="40"
                        height="40"
                        alt=""
                      />
                      &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default SideNav;
