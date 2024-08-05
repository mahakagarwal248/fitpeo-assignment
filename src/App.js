import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App h-screen overflow-clip">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
