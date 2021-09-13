// import logo from './logo.svg';
import './App.css';
import Graphs from './components/Graphs/Graphs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <u style={{ color: 'lightblue' }}>Learn React</u>
        </p>
      </header>
      <div>
        <Graphs />
      </div>
    </div>
  );
}

export default App;
