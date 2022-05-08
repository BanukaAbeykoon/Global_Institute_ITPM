import axios from "axios";
import React, {useState} from "react";
import Swal from "sweetalert2";


export default function StudentLogin(props){
    //let navigate = useNavigate();
    let [studentName,setstudentName] = useState("");
    let [studentID,setstudentID] = useState("");
    let [errorMsg,seterrormsg] = useState("");


    // const [studentIDShown, setcstudentIDShown] = useState(false);
   

    function LoginUser(e){
console.log("hello");
        e.preventDefault();
        console.log("hello");
        const LoginCredentials = {
            studentName,
            studentID,
          }
          console.log("hello");
          axios.post("http://localhost:8000/StudentLogin", LoginCredentials).then((res)=>{
            
           
            
            console.log(LoginCredentials);
         // alert("login success");
         Swal.fire('Successfully Login!',  'You clicked the button!',  'success')
          seterrormsg("");
          console.log("hello world");
         

             props.history.push("/StHome")
          }).catch((err) =>{

         console.log(err.response.data);
          


          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Check Your studentName & studentID!',
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
                  <form action="" method="" class="row g-3" onSubmit={LoginUser}>
                      <h4>Student Login</h4>
                      <h6 id="AdminLoginError" style={{color:"red"}}>{errorMsg}</h6>
                      <div class="col-12">
                          <label>studentName</label>
                          <input type="text" name="studentName" class="form-control" placeholder="studentName"  onChange={(e) => {
                          setstudentName(e.target.value);
                        }}  required/>
                      </div>
                      <div class="col-12">
                          <label>studentID</label>
                          <i></i>
                    
                          <input type="password" name="studentID" class="form-control" placeholder="studentID"  onChange={(e) => {
                          setstudentID(e.target.value);
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
                      <p class="text-center mb-0">Have not account yet? <a href="/StudentReg">Signup</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
}