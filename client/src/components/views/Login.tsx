import React from "react";
import Button from "@mui/material/Button";

const Login = ({ toggleLoginStatusAction }) => {
  return (
    <div>
      <Button onClick={toggleLoginStatusAction}>Login</Button>
    </div>
  );
};

export default Login;
