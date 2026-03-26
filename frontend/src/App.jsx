import Simulator from "./components/Simulator";
import heroImage from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="Market Simulation Hero" className="hero-img" />
        <div className="hero-content">
<h1 className="hero-title">Simulator</h1>
        <p className="hero-subtitle">Visualize thousands of market scenarios powered by Markov Chain transitions and Monte Carlo simulations.</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="app">
          <Simulator />
        </div>
      </div>
    </>
  );
}


export default App;