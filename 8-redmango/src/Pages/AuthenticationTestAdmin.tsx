import React from "react";
import { withAdminAuth } from "../HOC";

function AuthenticationTestAdmin() {
  return <div>This can be access by admin user.</div>;
}

export default withAdminAuth(AuthenticationTestAdmin);
