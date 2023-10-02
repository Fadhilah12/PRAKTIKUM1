// untuk mengimpor file css dengan nama App.css
import './App.css';
// untuk mengimpor komponen react dari library react
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // untuk menambahkan nilai count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // untuk mengurangi nilai count
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
  // mengebalikan nilai class App
  render() {
    return (
      <div>
        <h1>Pengenalan React</h1>
        <h2>counter</h2>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}


export default App;
