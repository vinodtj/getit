import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

// custom components for demo
import ComponentWithSass from "./components/with-sass/ComponentWithSass";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <ComponentWithStyledComponents />
        </main>
      </div>
    );
  }
}

export default App;
