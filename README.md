# 📈 Entangled Market Simulator
**HackIndia OpenClaw Hackathon | Team Entangled**

Interactive dashboard using **Markov Chain Monte Carlo** to simulate market paths. See 1000+ possible futures!

## ✨ What it does
Button click → Backend runs 1000 simulations → Frontend plots top 10 paths → **Visualize uncertainty!**

## 🎯 Live Demo
```
Frontend: http://localhost:5173/ (vite)
Backend: http://localhost:8000 (flask)
```
Click **\"Run Simulation\"** → Charts appear instantly.

## 🚀 Setup (2 minutes)
```bash
# 1. Backend API
cd backend
pip3 install flask flask-cors  # Already done
python3 app.py

# 2. Frontend (New Terminal)
cd frontend
npm install
npm run dev
```

## 🧠 How Markov Works
```
Transition Matrix:
UP (0) → 70% UP, 30% DOWN
DOWN (1) → 40% UP, 60% DOWN

monte_carlo(1000) → Array[1000][31 steps]
```

**Backend:** `simulation.py` generates paths  
**Frontend:** `Simulator.jsx` fetches → `Chart.jsx` Recharts lines

## 📱 UI Flow
```
Hero title → Run button → 
Loading → Multi-line chart (10 sims)
XAxis: Steps | YAxis: State (0/1)
```

## 🛠 Tech Stack
| Component | Tech |
|-----------|------|
| Backend | Flask 3.0, Python 3.8 |
| Frontend | React 18, Vite 5, Recharts 2 |
| State | Axios API, useState |
| Styling | CSS Modules, Glassmorphism |

## 📁 Project Structure
```
.
├── backend/
│   ├── app.py (CORS API)
│   └── simulation.py (Monte Carlo)
├── frontend/
│   ├── src/App.jsx (Layout)
│   ├── components/
│   │   ├── Simulator.jsx (Button/API)
│   │   └── Chart.jsx (Recharts)
│   └── assets/hero.png (Demo)
├── README.md
└── TODO.md (Progress)
```

## 🔍 Run Locally
1. **Backend:** `cd backend && python3 app.py`
2. **Frontend:** `cd frontend && npm run dev`
3. **Open:** http://localhost:5173/
4. **Test:** Click button → Chart loads!

## 🚀 Deploy (Optional)
```
Frontend: Vercel/Netlify (vite build)
Backend: Render/Railway (Flask)
```

## 🤝 Team
**HackIndia 2024 | OpenClaw Track**

**Made with ❤️ for predictive markets!**
