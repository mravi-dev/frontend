import "bootstrap/dist/css/bootstrap.css";
import "./home.css";

const Home = () => {
  return (
    <div className="col-md-4 m-auto ">
      <div className="card test shadow p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <a
            href="/login"
            className="btn btn-primary btn-lg button-login"
            role="button"
            aria-pressed="true"
          >
            Login
          </a>
          <br />
          Or
          <br />
          <a
            href="/signup"
            className="btn btn-secondary btn-lg button-signup"
            role="button"
            aria-pressed="true"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
