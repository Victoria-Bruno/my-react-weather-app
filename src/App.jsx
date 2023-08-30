import "./App.css"
import Weather from './components/Weather'
import Search from "./components/Search";

function App() {
  return <div className="App">
    <Search />
    <Weather />
    <br></br>
    <div className="open-source">Open source project available on <a href="https://github.com/Victoria-Bruno/my-react-weather-app.git">GitHub</a></div>
    </div>
}

export default App;
