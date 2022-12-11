import logo from './activity.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hidup itu seperti naik sepeda, untuk bisa maju kamu harus tetap berjalan<code>/App.js</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yukk Jalan!!
        </a>
      </header>
    </div>
  );
}

export default App;
