import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    age: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const mySignup = async (e) => {
    try {
      const { fname, lname, age, email, password1, password2 } = user;
      if (
        fname &&
        lname &&
        age &&
        email &&
        password1 &&
        password1 === password2
      ) {
        axios.post("http://localhost:8080/signup/", user).then((res) => {
          alert(res.data.message);
        });
      } else {
        alert("invalid input");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="col-md-4 m-auto">
      <div class="card signup-form">
        <div class="card-body">
          <form onSubmit={mySignup}>
            <div class="form-group">
              <label for="formFirstNameInput">First Name</label>
              <input
                type="text"
                class="form-control"
                id="formFirstNameInput"
                placeholder="First Name"
              />
            </div>
            <div class="form-group">
              <label for="formLastNameInput">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="formLastNameInput"
                placeholder="Last Name"
                value={user.lname}
                onChange={handlechange}
              />
            </div>
            <div class="form-group">
              <label for="formAgeInput">Age</label>
              <input
                type="number"
                class="form-control"
                id="formAgeInput"
                placeholder="Age"
                value={user.age}
                onChange={handlechange}
              />
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput2">Email</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Email"
                value={user.email}
                onChange={handlechange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword"
                placeholder="Password"
                value={user.password1}
                onChange={handlechange}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                placeholder="Password"
                value={user.password2}
                onChange={handlechange}
              />
            </div>
            <br />
            <button type="Submit" class="btn btn-primary">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
