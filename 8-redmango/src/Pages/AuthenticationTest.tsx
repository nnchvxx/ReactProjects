import React from "react";
import { withAuth } from "../HOC";

function AuthenticationTest() {
  return <div>This can be access by any logged user.</div>;
}

export default withAuth(AuthenticationTest);
