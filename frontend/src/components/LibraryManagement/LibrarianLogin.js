import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Librarylogin(props) {
  //let navigate = useNavigate();
  let [email, setemail] = useState("");
  let [Passward, setPassward] = useState("");
  let [errorMsg, seterrormsg] = useState("");

  // const [courseIDShown, setcourseIDShown] = useState(false);

  function Loginuser(e) {
    console.log("hello");
    e.preventDefault();
    console.log("hello");
    const LoginCredentials = {
      email,
      Passward,
    };
    console.log("hello");
    axios
      .post("http://localhost:8000/LibrarianLogin", LoginCredentials)
      .then((res) => {
        console.log(LoginCredentials);
        // alert("login success");
        Swal.fire("Successfully Login!", "You clicked the button!", "success");
        seterrormsg("");
        console.log("hello world");

        props.history.push("/Librarian");
      })
      .catch((err) => {
        console.log(err.response.data);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Check Your Email & Password!",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        seterrormsg(err.response.data.error);
      });
  }

  return (
    <div class="container"style={{opacity:"85%"}}>
      <div class="row">
        <div class="col-md-6 offset-md-4">
          <div class="login-form bg-light mt-4 p-4" >

<div class="card-body p-4 p-lg-5 text-black">


            <form action="" method="" class="row g-3" onSubmit={Loginuser}>
              <h4>Welcome </h4>
              <h6 id="AdminLoginError" style={{ color: "red" }}>
                {errorMsg}
              </h6>
              <div class="col-12">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="col-12">
                <label>password</label>
                <i></i>

                <input
                  type="password"
                  name="courseID"
                  class="form-control"
                  placeholder="passward"
                  onChange={(e) => {
                    setPassward(e.target.value);
                  }}
                />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe">
                    {" "}
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-dark float-end">
                  Login
                </button>
              </div>
            </form>
</div>
</div>

            <hr class="mt-4" />
          
          &nbsp;&nbsp;
        </div>
        &nbsp;&nbsp;
      </div>
      &nbsp;&nbsp;
    </div>
  );
}
