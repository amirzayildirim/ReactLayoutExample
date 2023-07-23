import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("logout:", isLogin);
    if (isLogin) {
      setTimeout(() => {
        setIsLogin(false);
        navigate("/login");
      }, 1000);
    }
  }, []);

  return <div>Please Wait...</div>;
}

export default Logout;
