import { useState } from "react";
import axios from "axios";
import Chart from "./Chart";

export default function Simulator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [numSims, setNumSims] = useState(200);

  const runSimulation = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`/api/simulate?n=${numSims}`);
      setData(res.data.slice(0, 10));
    } catch (e) {
      setError('Connection error. Check if backend is running on port 5000.');
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
            type="number" 
            min="50" max="1000" 
            value={numSims} 
            onChange={(e) => setNumSims(Number(e.target.value))} 
          />
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
      {data.length > 0 && <div className="chart-wrapper"><Chart data={data} /></div>}
    </div>
  );
}
