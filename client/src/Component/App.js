import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Header />
            <div className="content">
              <Sidebar />
              <Route path="/" component={Dashboard} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
