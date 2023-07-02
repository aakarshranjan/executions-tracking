import React from "react";
import Button from "@mui/material/Button";

const Login = ({ initiateLoginEmployeeAction }) => {
  return (
    <div>
      <Button onClick={initiateLoginEmployeeAction}>Login</Button>
    </div>
  );
};

export default Login;
