import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
//  import {Routes} from 'react-router-dom';



//import Courses

import CourseCreatePost   from './components/CourseManagement/CourseCreatePost';
import CourseEditPost   from './components/CourseManagement/CourseEditPost';
import CourseHome   from './components/CourseManagement/CourseHome';
import CoursePostDetails   from './components/CourseManagement/CoursePostDetails';
import Coursedashboard from './components/CourseManagement/Coursedashboard';
import  CourseReport from './components/CourseManagement/CourseReport';





// import Staff



//Library components


//Student Components






export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
       

       

        <div className="container">

         <Route path="/Coursedashboard"   component={Coursedashboard}></Route>
         <Route path="/CourseHome"   component={CourseHome}></Route>
         <Route path="/add"  component={CourseCreatePost}></Route>
         <Route path="/edit/:id"  component={CourseEditPost}></Route>
         <Route path="/course/:id"   component={CoursePostDetails}></Route>
         <Route path="/CourseReport"   component={CourseReport}></Route>
          

          






        </div>
          
      </BrowserRouter>
    );
  }
}
