import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Table from "./components/Table";
import { loadMemory, storeMemory } from "./services/persistence";

class App extends React.Component {
  state = {
    baseURL: `https://api.github.com/users/`,
    uname: "",
    data: loadMemory(),
    refresh: false
  };
  persist = data => {
    this.setState({ data }); // set the state
    storeMemory(data); // bake the cookies
  };
  changeUser = uname => {
    this.setState({ uname });
    return [this.state.baseURL, uname].join("");
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/debauchery1st/keepers" />}
          />
          <Route
            path="/:id/keepers"
            component={() => (
              <Table
                id={this.state.uname}
                data={this.state.data}
                persist={this.persist}
                changeUser={this.changeUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
