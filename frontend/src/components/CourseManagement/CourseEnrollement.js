import axios from "axios";
import React, {useState} from "react";
import Swal from "sweetalert2";


export default function CourseEnrollement(props){
    //let navigate = useNavigate();
    let [courseName,setcourseName] = useState("");
    let [courseID,setcourseID] = useState("");
    let [errorMsg,seterrormsg] = useState("");


    // const [courseIDShown, setcourseIDShown] = useState(false);
   

    function EnrolUser(e){
console.log("hello");
        e.preventDefault();
        console.log("hello");
        const EnrollementCredentials = {
            courseName,
            courseID,
          }
          console.log("hello");
          axios.post("http://localhost:8000/Enrol", EnrollementCredentials).then((res)=>{
            
           
            
            console.log(EnrollementCredentials);
         // alert("login success");
         Swal.fire('Successfully Login!',  'You clicked the button!',  'success')
          seterrormsg("");
          console.log("hello world");
         

             props.history.push("/CourseHome")
          }).catch((err) =>{

         console.log(err.response.data);
          


          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Your courseName & courseID!',
            showClass: {
              popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
              popup: 'animate_animated animate_fadeOutUp'
            }
          })
         seterrormsg(err.response.data.error);
        

        })
    }


    return(
      <div class="container">
      <div class="row">
          <div class="col-md-4 offset-md-4">
              <div class="login-form bg-light mt-4 p-4">
                  <form action="" method="" class="row g-3" onSubmit={EnrolUser}>
                      <h4>Welcome Back</h4>
                      <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>
                      <div class="col-12">
                          <label>Course Name</label>
                          <input type="text" name="courseName" class="form-control" placeholder="courseName"  onChange={(e) => {
                          setcourseName(e.target.value);
                        }}  required/>
                      </div>
                      <div class="col-12">
                          <label>Course ID</label>
                          <i></i>
                    
                          <input type="password" name="courseID" class="form-control" placeholder="courseID"  onChange={(e) => {
                          setcourseID(e.target.value);
                        }}/>
                      </div>
                      <div class="col-12">
                          <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="rememberMe"/>
                              <label class="form-check-label" for="rememberMe"> Remember me</label>
                          </div>
                      </div>
                      <div class="col-12">
                          <button type="submit" class="btn btn-dark float-end">Login</button>
                      </div>
                  </form>
                  <hr class="mt-4"/>
                  <div class="col-12">
                      <p class="text-center mb-0">Have not account yet? <a href="#">Signup</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}