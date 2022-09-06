import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Style/signup.css";

const Signup = () => {
  const navigate = useNavigate();

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

  const mySignup = (e) => {
    e.preventDefault();
    const { fname, lname, age, email, password1, password2 } = user;
    if (
      fname &&
      lname &&
      age &&
      email &&
      password1 &&
      password1 === password2
    ) {
      axios.post("http://localhost:8080/signup", user).then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate("/");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="col-md-6 m-auto ">
      <div className="card signup-form shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <form onSubmit={mySignup}>
            <div className="row">
              <div className="col">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="First name"
                  name="fname"
                  value={user.fname}
                  onChange={handlechange}
                />
              </div>
              <div className="col">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Last name"
                  name="lname"
                  value={user.lname}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Age"
                  name="age"
                  value={user.age}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password1">Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password1"
                  placeholder="Password"
                  name="password1"
                  value={user.password1}
                  onChange={handlechange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="password2">Re-Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="Re-Password"
                  name="password2"
                  value={user.password2}
                  onChange={handlechange}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col signup-btn">
                <input
                  className="btn btn-primary btn-lg"
                  type="submit"
                  name="Submit"
                  //onClick={mySignup}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
