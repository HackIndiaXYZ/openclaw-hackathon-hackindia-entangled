# 📈 Entangled Market Simulator
**HackIndia OpenClaw Hackathon | Team Entangled**

Markov Chain + Monte Carlo simulation dashboard. Visualize multiple market path forecasts in real-time.

## 🚀 Features
- 🔄 Backend: Flask API (Markov transition matrix UP/DOWN)
- 📊 Frontend: React + Recharts (interactive line charts)
- ⚡ Real-time sims (1000 runs, sliced top 10)
- 🎨 Glassmorphism UI, responsive design
- 🛠 Vite + Node 20 LTS

## 🛫 Quick Start
```bash
# Terminal 1: Backend
cd backend
python3 app.py  # http://127.0.0.1:5000

# Terminal 2: Frontend
cd frontend
npm run dev     # http://localhost:5173
```

**Click "Run Simulation" → Watch paths emerge!**

## 🏗 Architecture
```
backend/           Flask + Markov Monte Carlo
├── app.py        CORS API /simulate
└── simulation.py Generators

frontend/         React + Vite + Recharts
├── App.jsx       Market dashboard
├── Simulator.jsx Button + axios fetch
└── Chart.jsx     Multi-line paths
```

## 🔧 Prerequisites
- Node.js 20 LTS+ (`nvm use --lts`)
- Python 3.8+

## 📁 Files
| Path | Description |
|------|-------------|
| `backend/app.py` | Flask server |
| `frontend/src/App.jsx` | Main UI |
| `frontend/src/components/` | Sim + Chart |
| `TODO.md` | Completion log |

## 🤝 Contributing
```
git checkout main
git pull origin main
# make changes
git add .
git commit -m "feat: description"
git push origin main
```

## 🎯 Demo
![Demo Chart](frontend/src/assets/hero.png)
**Live:** localhost:5173 → Run sims!

**HackIndia 2024 | Built with ❤️ for OpenClaw**
