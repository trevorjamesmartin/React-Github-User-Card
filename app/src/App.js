import React from "react";
import Table from "./components/Table";
import axios from "axios";
import { loadMemory, storeMemory } from "./services/persistence";

class App extends React.Component {
  state = {
    baseURL: `https://api.github.com/users/`,
    uname: "debauchery1st",
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
    const data = loadMemory();
    if (data.login === this.state.uname && !this.state.refresh) {
      console.log(`loading from cache`);
      this.setState({ data });
      return;
    }
    const url = [this.state.baseURL, this.state.uname].join("");
    axios.get(url).then(result => {
      this.persist(result.data);
    });
  }
  hacker = () => this.state.data || ["wtf"];
  render() {
    return (
      <div className="App">
        <Table data={this.state.data} persist={this.persist} />
      </div>
    );
  }
}

export default App;
