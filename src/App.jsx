import "./App.css"
import Weather from './components/Weather'
import Search from "./components/Search";

function App() {
  return <div className="App">
    <Search />
    <Weather />
    <br></br>
    <div className="open-source">Open source project available on GitHub</div>
    </div>
}

export default App;
