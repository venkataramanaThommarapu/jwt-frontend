import React, { useState } from "react";
import "./index.css";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dummy, setDummy] = useState();
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    

    
    if (token) {
      
      const decode = jwt_decode(token);
      if (decode.role === "administrator") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, []);

  function increse() {
    
    if (isAdmin) {
      setCount(count + 1);
    } else {
      alert("only Admin can Manipulate count value");
    }
  }

  function decrese() {
  
    if (isAdmin) {
      setCount(count - 1);
    } else {
      alert("only Admin can Manipulate count value");
    }
  }

  function reset() {
   
    if (isAdmin) {
      setCount(0);
    } else {
      alert("only Admin can Manipulate count value");
    }
  }

  return (
    <>
      <div className="counter-page">
        <div className="counter-section">
          <h1>Count</h1>
          <h1>{count}</h1>

          <div className="btn-container">
            <button className="button left" onClick={increse}>
              +
            </button>
            <button className="button" onClick={reset}>
              Reset
            </button>
            <button className="button right" onClick={decrese}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
