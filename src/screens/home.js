import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Using sass with react</h2>
      <p>
        after installing react, install sass and create a stylesheet, everything
        is automatically imporrted
      </p>
      <h2>React router</h2>
      <p>first install it using npm install react-router-dom</p>
      <p>check editor for remaining code</p>
      {/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */}
      <p> then route this way</p>
      <pre>
        <code>
          {/* <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/forgot-password" element={<Login />} />
            </Routes>
          </Router> */}
        </code>
      </pre>
      <p>to navigate</p>
      <button onClick={() => navigate("/login")}>login</button>
      <h2>React redux</h2>
    </div>
  );
}

export default Home;
