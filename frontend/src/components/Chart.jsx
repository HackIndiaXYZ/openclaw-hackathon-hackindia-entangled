import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend
  } from "recharts";
  
  export default function Chart({ data }) {
    if (!data.length) return null;
  
    const formatted = data[0].map((_, i) => {
      let obj = { step: i };
      data.forEach((sim, index) => {
        obj[`sim${index}`] = sim[i];
      });
      return obj;
    });
  
  const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f97316', '#eab308', '#22c55e', '#10b981', '#06b6d4', '#0ea5e9'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formatted}>
        <XAxis dataKey="step" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
        {data.map((_, i) => (
          <Line 
            key={i} 
            type="monotone" 
            dataKey={`sim${i}`} 
            stroke={colors[i % colors.length]} 
            strokeWidth={2}
            dot={false} 
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
  }
