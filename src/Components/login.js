import axios from "axios";
import "./login.css";

const Login = () => {
  const myLogin = async (e) => {
    e.preventDefault();
    const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:8080/login/",
        params: { email },
      });
      console.log(response);
      if (password === response.data.password) {
        alert("welcome user");
      } else {
        alert("Incorrect Password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="col-md-4 m-auto ">
      <div class="card login-form shadow p-3 mb-5 bg-white rounded">
        <div class="card-body login-body">
          <form onSubmit={myLogin}>
            <div class="form-group ">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <div class="login-btn">
              <button type="Submit" class="btn btn-primary ">
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
