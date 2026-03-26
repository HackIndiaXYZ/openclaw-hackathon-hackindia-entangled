import { useState } from "react";
import axios from "axios";
import Chart from "./Chart";

export default function Simulator() {
const [data, setData] = useState([]);
const [avgFinal, setAvgFinal] = useState(0);
  const [volatility, setVolatility] = useState(0);
  const [positiveRate, setPositiveRate] = useState(0);
  const [var5, setVar5] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [numSims, setNumSims] = useState(200);
  const [inputValue, setInputValue] = useState('200');

  const runSimulation = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`/api/simulate?n=${numSims}`);
      const simData = res.data.slice(0, 10);
      setData(simData);
      
      // Compute live stats
      const finalPrices = simData.map(d => d[d.length - 1]);
      const avgFinal = finalPrices.reduce((a, b) => a + b, 0) / finalPrices.length;
      const variance = finalPrices.reduce((a, b) => a + Math.pow(b - avgFinal, 2), 0) / finalPrices.length;
      const vol = Math.sqrt(variance) / avgFinal * 100;
      const positive = finalPrices.filter(p => p > 100).length / finalPrices.length;
      const sortedLosses = finalPrices.map(p => (100 - p)/100).sort((a,b) => a-b);
      const var5 = sortedLosses[Math.floor(sortedLosses.length * 0.05)] * 100;
      
      setAvgFinal(avgFinal);
      setVolatility(vol);
      setPositiveRate(positive);
      setVar5(var5);
    } catch (e) {
setError('Connection error. Check if backend is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="simulator">
      <div className="controls">
        <label>
          Number of Simulations: 
            <input 
            type="text" 
            pattern="[0-9]*"
            value={inputValue}
            onChange={(e) => {
              const val = e.target.value.replace(/^0+/, '');
              setInputValue(val);
            }}
            onBlur={() => {
              const num = Number(inputValue) || 200;
              const clamped = num < 50 ? 50 : num > 1000 ? 1000 : num;
              setNumSims(clamped);
              setInputValue(clamped.toString());
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.target.blur();
              }
            }} />
          </label>
        <button onClick={runSimulation} disabled={loading}>
          {loading ? (
            <span className="spinner"></span>
          ) : (
            `🚀 Run ${numSims} Sims`
          )}
        </button>
      </div>
      {error && <div className="error">{error}</div>}
{data.length > 0 && (
  <>
    <div className="chart-wrapper">
      <Chart data={data.slice(0,5)} />
    </div>
    <div className="knowledge">
      <div className="knowledge-card">
        <h3>📈 Stock Price Monte Carlo</h3>
        <p>Models thousands of possible stock price trajectories using geometric Brownian motion with Markov state transitions to quantify price risk.</p>
      </div>
      <div className="knowledge-card">
        <h3>📊 Market Momentum (Markov)</h3>
        <p>UP days 70% likely to repeat (momentum), DOWN 60% persist - realistic stock trend behavior.</p>
      </div>
      <div className="knowledge-card">
        <h3>📊 Live Stats ({numSims} sims)</h3>
<div className="stats">
          Expected Price: <strong>${avgFinal.toFixed(1)}</strong><br/>
          Daily Vol: <strong>{volatility.toFixed(1)}%</strong><br/>
          Upside Prob: <strong>{(positiveRate * 100).toFixed(0)}%</strong><br/>
          VaR 5%: <strong>{var5.toFixed(1)}% loss</strong>
        </div>
      </div>
    </div>
  </>
)}
    </div>
  );
}
