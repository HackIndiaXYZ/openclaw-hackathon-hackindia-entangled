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
  
  const formatted = data[0].map((_, i) => ({
      day: i,
      ...data.reduce((acc, sim, index) => {
        acc[`Path ${index + 1}`] = sim[i];
        return acc;
      }, {})
    }));

  const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#f97316', '#eab308', '#22c55e', '#10b981', '#06b6d4', '#0ea5e9'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formatted}>
        <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottom', offset: -10 }} />
        <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Legend />
{Array.from({length: Math.min(5, data.length)}, (_, i) => (
          <Line 
            key={i} 
            type="monotone" 
            dataKey={`Path ${i + 1}`} 
            stroke={colors[i % colors.length]} 
            strokeWidth={3}
            strokeOpacity={0.9 - i * 0.1}
            dot={false} 
            name={`Path ${i + 1}`}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
  }
