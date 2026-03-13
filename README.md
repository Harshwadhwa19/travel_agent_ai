# Travello - Agentic Travel Planning System

Travello is a web-based travel planning system that leverages AI to help users discover destinations, plan itineraries, and manage budgets collaboratively.

## Prerequisites
- **Node.js** (v14+)
- **Python** (v3.8+)
- **npm** (comes with Node.js)
- **pip** (comes with Python)

## Getting Started

### 1. Backend Setup (Flask)
The backend handles the API, database, and AI integrations.

```bash
cd server
python -m venv venv
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

**Configuration**: Create a `.env` file in the `server/` directory:
```env
DATABASE_URL=sqlite:///travel.db
JWT_SECRET_KEY=your-secret-key
OPENAI_API_KEY=your-openai-api-key
```

**Run Server**:
```bash
python app.py
```

### 2. Frontend Setup (React)
The frontend provides the user interface for travel planning.

```bash
# From project root
npm install --legacy-peer-deps
npm start
```

## Features
- **Collaborative Trip Workspace**: Define travel details and manage notes with others.
- **Destination Discovery**: Save and organize places to visit.
- **AI Itinerary Planning**: Generate and refine travel plans using GPT-3.5.
- **Budget Tracking**: Estimate and monitor travel expenses.

## Troubleshooting

### 'react-scripts' is not recognized
If you see this error, it means the dependencies were not installed correctly. Run:
```bash
# Clean reinstall
rd /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
```

### Dependency Conflicts
If `npm install` fails with an `ERESOLVE` error, always use the `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```
