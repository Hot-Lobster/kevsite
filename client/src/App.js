import React, { Component } from "react";
import "./App.css";
import ButtonAppBar from "./components/navtop";
import Route from "react-router-dom";
import Home from "./pages/homePage";
import Lesson from "./pages/lessonPage";
import Store from "./pages/storePage";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Route href="/">
          <Home />
        </Route>
        <Route>
          <Lesson />
        </Route>
        <Route>
          <Store />
        </Route>
      </div>
    );
  }
}

export default App;
