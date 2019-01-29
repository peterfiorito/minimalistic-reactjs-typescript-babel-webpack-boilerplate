import * as React from "react";
import { hot } from 'react-hot-loader/root'


export default class App extends React.Component {
  filteredTodos = [{id: 1, completed: false, text: 'test'}];
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Minimalistic React boilerplate
          </h1>
        </header>
      </div>
    );
  }
}
