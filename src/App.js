import {BrowserRouter} from "react-router-dom"
import Pages from "./pages/Pages"
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
