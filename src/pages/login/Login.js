import { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";

// styles
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDemoClicked, setIsDemoClicked] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const { login, isPending, error } = useLogin();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoginClicked(true);
    login(email, password);
  };

  const demoButtonHandler = () => {
    setIsDemoClicked(true);
    login("aloy@email.com", "aloy1180");
  };

  useEffect(() => {
    if (error) {
      setIsDemoClicked(false);
      setIsLoginClicked(false);
    }
  }, [error]);

  return (
    <form className="auth-form" onSubmit={formSubmitHandler}>
      <h2>Login</h2>

      <label>
        <span>Email</span>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <div className="btn-container">
        {!isPending && !isDemoClicked && <button className="btn">Login</button>}
        {isPending && !isDemoClicked && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}

        {!isPending && !isLoginClicked && (
          <button className="btn" type="button" onClick={demoButtonHandler}>
            Demo App
          </button>
        )}
        {isPending && !isLoginClicked && (
          <button className="btn demo-loading" disabled>
            Loading...
          </button>
        )}
      </div>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
