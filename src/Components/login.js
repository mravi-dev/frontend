import axios from "axios";
import "./login.css";

const Login = () => {
  const myLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    axios({
      method: "get",
      url: "http://localhost:8080/login/",
      params: { email },
    })
      .then((res) => {
        console.log(res);
        if (password === res.data.password) {
          alert("welcome user");
        } else {
          alert("Incorrect Password");
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
