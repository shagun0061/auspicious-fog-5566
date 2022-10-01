import "./App.css";
 
import Landing from "./components/Landing";
import Allroutes from "./pages/allroutes";
function App() {
  return (
    <div className="App">
      <Allroutes>
        <Landing />
      </Allroutes>
    </div>
  );
}

export default App;
