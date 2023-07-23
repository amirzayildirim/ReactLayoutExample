import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { isLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/authrError");
    }
  }, []);

  return <>{isLogin && isLogin === true && <span>App Content</span>}</>;
}

export default App;
