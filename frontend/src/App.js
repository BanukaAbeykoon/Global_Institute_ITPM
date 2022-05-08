import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
//  import {Routes} from 'react-router-dom';

import NavBar   from './components/NavBar';

//import Courses

import CourseCreatePost   from './components/CourseManagement/CourseCreatePost';
import CourseEditPost   from './components/CourseManagement/CourseEditPost';
import CourseHome   from './components/CourseManagement/CourseHome';
import CoursePostDetails   from './components/CourseManagement/CoursePostDetails';
import Coursedashboard from './components/CourseManagement/Coursedashboard';
import CourseReport from './components/CourseManagement/CourseReport';
import CourseEnrollement from './components/CourseManagement/CourseEnrollement';

//import Payment

import PaymentCreatePost   from './components/PaymentManagement/PaymentCreatePost';
import PaymentEditPost   from './components/PaymentManagement/PaymentEditPost';
import PaymentHome   from './components/PaymentManagement/PaymentHome';
import PaymentPostDetails   from './components/PaymentManagement/PaymentPostDetails';
import Paymentdashboard from './components/PaymentManagement/Paymentdashboard';
import PaymentReport from './components/PaymentManagement/PaymentReport';



// import Staff
import StaffAdminCreatePost from './components/StaffManagement/StaffAdminCreatePost';
import StaffAdminUpdate from './components/StaffManagement/StaffAdminUpdate';
import StaffAdminHome from './components/StaffManagement/StaffAdminHome';
import StaffDashboard from './components/StaffManagement/StaffDashboard';
import StaffPostDetails from './components/StaffManagement/StaffPostDetails';
import StaffAcademichome from './components/StaffManagement/StaffAcademichome';
import StaffNonacademichome from './components/StaffManagement/StaffNonacademichome';
import StaffSignup from './components/StaffManagement/StaffSignup';
import StaffLogin from './components/StaffManagement/StaffLogin';
import StaffReport from './components/StaffManagement/StaffReport';

//Library components
import LibraryHome from "./components/LibraryManagement/LibraryHome";
import LibraryCreatePost from "./components/LibraryManagement/LibraryCreatePost";
import LibraryEditPost from "./components/LibraryManagement/LibraryEditPost";
import LibraryPostDetails from "./components/LibraryManagement/LibraryPostDetails";
import LBDashboard from "./components/LibraryManagement/LBDashboard";
import MainDashboard from "./components/LibraryManagement/MainDashboard";
import LBReport from "./components/LibraryManagement/LBReport";
import LBReserveCreate from "./components/LibraryManagement/LBReserveCreate";
import LBReserveHome from "./components/LibraryManagement/LBReserveHome";
import LBReserveEdit from "./components/LibraryManagement/LBReserveEdit";
import LBR_Report from "./components/LibraryManagement/LBR_Report";
import LBRDashboard from "./components/LibraryManagement/LBRDashboard";
import Librarian from "./components/LibraryManagement/Librarian";
import LibrarianLogin from "./components/LibraryManagement/LibrarianLogin";



//Student Components
import StudentCreatePost   from './components/StudentManagement/StudentCreatePost';
import StudentEditPost   from './components/StudentManagement/StudentEditPost';
import StudentHome   from './components/StudentManagement/StudentHome';
import StudentPostDetails   from './components/StudentManagement/StudentPostDetails';
import Studentdashboard from './components/StudentManagement/Studentdashboard';
import StReports from './components/StudentManagement/StReports';
import StudentReg from './components/StudentManagement/StudentReg';
import StAdminHome from './components/StudentManagement/StAdminHome';
import StudentLogin from './components/StudentManagement/StudentLogin';
import StHome from './components/StudentManagement/StHome';






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {window.location.pathname !== "/" && <NavBar />}
        <Route path="/" exact component={MainDashboard}></Route>

        <div className="container">
          <Route path="/Coursedashboard" component={Coursedashboard}></Route>
          <Route path="/CourseHome" component={CourseHome}></Route>
          <Route path="/add" component={CourseCreatePost}></Route>
          <Route path="/edit/:id" component={CourseEditPost}></Route>
          <Route path="/course/:id" component={CoursePostDetails}></Route>
          <Route path="/CourseReport" component={CourseReport}></Route>
          <Route path="/Enrol" component={CourseEnrollement}></Route>

          <Route path="/Paymentdashboard" component={Paymentdashboard}></Route>
          <Route path="/PaymentHome" component={PaymentHome}></Route>
          <Route path="/Paymentadd" component={PaymentCreatePost}></Route>
          <Route path="/Paymentedit/:id" component={PaymentEditPost}></Route>
          <Route path="/Payment/:id" component={PaymentPostDetails}></Route>
          <Route path="/PaymentReport" component={PaymentReport}></Route>

          <Route path="/StaffAdminHome" component={StaffAdminHome}></Route>
          <Route
            path="/StaffAdminCreatePost"
            component={StaffAdminCreatePost}
          ></Route>
          <Route path="/staffedit/:id" component={StaffAdminUpdate}></Route>
          <Route path="/staff/:id" component={StaffPostDetails}></Route>
          <Route path="/StaffDashboard" component={StaffDashboard}></Route>
          <Route
            path="/StaffAcademichome"
            component={StaffAcademichome}
          ></Route>
          <Route
            path="/StaffNonacademichome"
            component={StaffNonacademichome}
          ></Route>
          <Route path="/StaffSignup" component={StaffSignup}></Route>
          <Route path="/StaffLogin" component={StaffLogin}></Route>
          <Route path="/StaffReport" component={StaffReport}></Route>

          <Route path="/Studentdashboard" component={Studentdashboard}></Route>
          <Route path="/StudentHome" component={StudentHome}></Route>
          <Route path="/StReports" component={StReports}></Route>
          <Route path="/StudentReg" component={StudentReg}></Route>
          <Route path="/StAdminHome" component={StAdminHome}></Route>
          <Route path="/StudentLogin" component={StudentLogin}></Route>
          <Route path="/StHome" component={StHome}></Route>
          <Route path="/studentadd" component={StudentCreatePost}></Route>
          <Route path="/studentedit/:id" component={StudentEditPost}></Route>
          <Route path="/student/:id" component={StudentPostDetails}></Route>
          <Route path="/student/:id" component={StudentPostDetails}></Route>
        </div>

        <Route path="/LBDashboard" exact component={LBDashboard}></Route>
        <Route path="/LBrowse" component={LibraryHome}></Route>
        <Route path="/LBReport" component={LBReport}></Route>
        <Route path="/AddLB" component={LibraryCreatePost}></Route>
        <Route path="/EditLB/:id" component={LibraryEditPost}></Route>
        <Route path="/Librarian" component={Librarian}></Route>
        <Route
          path="/LibraryPostDetails/:id"
          component={LibraryPostDetails}
        ></Route>
        <Route path="/AddLBR" component={LBReserveCreate}></Route>
        <Route path="/LBReserveHome" component={LBReserveHome}></Route>
        <Route path="/EditLBR/:id" component={LBReserveEdit}></Route>
        <Route path="/LBR_Report" component={LBR_Report}></Route>
        <Route path="/LBRDashboard" component={LBRDashboard}></Route>
        <Route path="/LibrarianLogin" component={LibrarianLogin}></Route>
      </BrowserRouter>
    );
  }
}
