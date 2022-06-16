import "./App.css";
import { Explore } from "./components/explore/Explore";
import { Games } from "./components/games/Games";
import Navbar from "./components/navbar/Navbar";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Games />
      <Explore />
    </div>
  );
}

export default App;
