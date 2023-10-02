
//1
// const { useState } = React;

// const CounterApp = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     }
//     const decrement = () => {
//         setCount(count - 1);
//     }
//     return (
//         <div>
//             <h1>Counter</h1>
//             <p>Counter:{count}</p>
//             <button onClick={decrement}>-1</button>
//             <button onClick={increment}>+1</button>
//         </div>
//     );
// };
// ReactDOM.render(<CounterApp />, document.getElementById('root'));

//2
// const React = require('react');
// // const reactDOM = require('react-dom');
// const { useState } = React;

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const plus = () => {
//         setCount(count + 1);
//     };

//     const min = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div>
//             <h1>Counter</h1>
//             <p>Counter:{count}</p>
//             <button onClick={min}>-1</button>
//             <button onClick={plus}>+1</button>
//         </div>
//     );
// };

// reactDOM.render(<Counter />, document.getElementById('root'));
// module.exports = Counter;

//3
// import React from "react";
// const { useState } = React;

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const plus = () => {
//         setCount(count + 1);
//     };

//     const min = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div>
//             <h1>Counter</h1>
//             <p>Counter:{count}</p>
//             <button onClick={min}>-1</button>
//             <button onClick={plus}>+1</button>
//         </div>
//     )
// };

// reactDOM.render(<Counter />, document.getElementById('root'));

//  not use render. if you got reactDOM, but you can get from element id
// render()
//     return (
//         <div>
//             <h1>Counter App</h1>
//             <p>Counter:{count}</p>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//         </div>
//     );
// use class for to function, you can get component react
// class CounterClass extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter</h1>
//                 <p>{this.state.count}</p>
//                 <button onClick={() => this.setState({ count: this.state.count - 1 })}>-1</button>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>+1</button>
//             </div>
//         );
//     }
// }