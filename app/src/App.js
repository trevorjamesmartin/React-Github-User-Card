import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Table from "./components/Table";
import axios from "axios";
import { loadMemory, storeMemory } from "./services/persistence";

class App extends React.Component {
  state = {
    baseURL: `https://api.github.com/users/`,
    uname: "",
    data: loadMemory(),
    refresh: false
  };
  constructor() {
    super();
    console.log("App constructor");
  }
  persist = data => {
    this.setState({ data }); // set the state
    storeMemory(data); // bake the cookies
  };
  componentDidMount() {
    // debugger;
    var location = window.location.pathname;
    if (!this.state.uname === location) {
      const url = [this.state.baseURL, location].join("");
      this.setState({ uname: location });
      axios.get(url).then(result => {
        this.persist(result.data);
      });
    }
  }
  hacker = () => this.state.data || ["wtf"];
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/debauchery1st" />}
          />
          <Route
            path="/:id/"
            component={() => (
              <Table
                id={this.state.uname}
                data={this.state.data}
                persist={this.persist}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
