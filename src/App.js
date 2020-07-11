import React from "react";
import Weather from "./Components/Weather/Weather";
import News from "./Components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" component={News} />
      </Switch>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <Weather />
    </div>
  );
}
export default App;
