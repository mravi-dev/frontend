import "bootstrap/dist/css/bootstrap.css";
import "./home.css";

const Home = () => {
  return (
    <div class="card test">
      <div class="card-body">
        <a
          href="/login"
          class="btn btn-primary btn-lg button-login"
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
          class="btn btn-secondary btn-lg button-signup"
          role="button"
          aria-pressed="true"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
