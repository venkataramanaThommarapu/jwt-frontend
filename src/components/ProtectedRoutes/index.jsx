import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtuctedRoute({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return <Navigate to="/" replace />;
      }}
    />
  );
}

export default ProtuctedRoute;
