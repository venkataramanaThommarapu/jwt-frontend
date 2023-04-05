import React from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    localStorage.clear();
  }, [0]);

  const navigatesTo = useNavigate();

  let userDetails = { email: email, username: username, password: password };

  function handleSubmit(e) {
    e.preventDefault();
    if (email.length < 6 || password.length < 6 || username.length < 6) {
      setError(true);
      return;
    }
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    fetch("http://localhost:3005/login", options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const token = res.token;
        if (token) {
          localStorage.setItem("token", token);
          navigatesTo("home");
        } else {
          console.log(userDetails);
          localStorage.setItem("userName", username);
          navigatesTo("home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="text">
      <div className="form-border">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>userName</Form.Label>
            <Form.Control
              type="text"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
            />
            {error && username.length <= 6 ? (
              <Form.Label className="text-danger">
                username Must be More Than 6 Charcaters
              </Form.Label>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && email.length <= 6 ? (
              <Form.Label className="text-danger">
                Email must have more than 6 characters
              </Form.Label>
            ) : (
              ""
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && password.length <= 6 ? (
              <Form.Label className="text-danger">
                Password Must be More than 6 Characters
              </Form.Label>
            ) : (
              ""
            )}
          </Form.Group>
          <div className="text-center">
            <Button className="button-login" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
