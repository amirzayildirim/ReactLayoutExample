import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("admin@admin.com");
  const [password, setpassword] = useState("12345");
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (email === "admin@admin.com" && password === "12345") {
      setIsLogin(true);
      navigate("/app");
    }
  };

  useEffect(() => {
    if (isLogin) {
      setTimeout(() => {
        navigate("/app");
      }, 1000);
    }
    console.log(isLogin);
  });

  return (
    <>
      {isLogin && isLogin === true ? (
        <div>You are already login</div>
      ) : (
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="loginContainer">
              <div className=""></div>
              <h3>
                <center>Login</center>
              </h3>
              <hr />
              <form onSubmit={SubmitForm}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-sm btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      )}
    </>
  );
}

export default Login;
