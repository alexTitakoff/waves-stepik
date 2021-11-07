import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Hello Waves</h1>
//       </header>
//     </div>
//   );
// }

import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.authFunc = this.authFunc.bind(this);
  }
  authFunc() {
    const authData = { data: "Auth on my site" };
    if (window.WavesKeeper) {
      window.WavesKeeper.auth(authData)
        .then(auth => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
        }).catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        })
    } else {
      alert("To Auth WavesKeeper should be installed.");
    }
  }
  render() {
    return (
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Waves</h1>
        <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc} />
      </div>
    )
  }
}

// const app = document.getElementById('app');
// if(app){
//     ReactDOM.render(<App/>, app);
// }

export default App;
