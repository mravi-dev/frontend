import axios from "axios";
import "../Style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const myLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    axios
      .get("http://localhost:8080/login?email=" + email)
      .then((res) => {
        console.log(res);
        if (password === res.data.password) {
          console.log(res.data);
          navigate("/dashboard/" + res.data.firstName);
        } else {
          alert("Incorrect Password!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-4 m-auto ">
      <div className="card login-form shadow p-3 mb-5 bg-white rounded">
        <div className="card-body login-body">
          <form onSubmit={myLogin}>
            <div className="form-group ">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <div className="form-group">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault1"
                style={{ paddingRight: "2rem", paddingLeft: ".5rem" }}
              >
                Line Man
              </label>

              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault2"
                style={{ paddingRight: "2rem", paddingLeft: ".5rem" }}
              >
                Junior Engineer
              </label>
            </div>

            <br />
            <div className="login-btn">
              <button type="Submit" className="btn btn-primary ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
