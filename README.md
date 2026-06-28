# PrioriAI

An AI-powered productivity assistant that helps users organize, prioritize, and manage daily tasks intelligently. PrioriAI combines a modern task management interface with Google's Gemini AI to generate personalized productivity recommendations based on deadlines, priorities, and estimated completion times.

---

## Live Demo

**Website:** https://priori-ai-five.vercel.app

**Repository:** https://github.com/Arpit2317/PrioriAI

---

## Overview

Managing multiple tasks often becomes difficult when everything appears equally important. PrioriAI addresses this problem by analyzing user tasks and providing intelligent recommendations about what should be completed first.

Instead of acting as a traditional to-do list, the application uses AI to evaluate urgency, priority, deadlines, and estimated duration to help users make better decisions throughout the day.

---

## Features

* AI-powered task prioritization using Google Gemini
* Create, edit and manage daily tasks
* Deadline selection using calendar input
* Estimated task duration support
* Priority categorization (High, Medium, Low)
* Personalized AI productivity recommendations
* AI Mission Control dashboard
* Productivity score visualization
* Timeline-based daily planning
* Modern and responsive user interface

---

## Technology Stack

### Frontend

* React.js
* Vite
* JavaScript (ES6)
* CSS3

### AI Integration

* Google Gemini API

### Libraries

* Lucide React

### Deployment

* Vercel

---

## Project Structure

```text
PrioriAI
│
├── backend/
├── docs/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── services/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Arpit2317/PrioriAI.git
```

Move into the frontend directory

```bash
cd PrioriAI/frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## How It Works

1. Users create tasks with a deadline, priority level, and estimated duration.
2. Task information is sent to the Gemini AI model.
3. The AI evaluates the workload based on urgency, importance, and available time.
4. Personalized recommendations are generated to help users complete the most impactful tasks first.
5. The dashboard updates to reflect task progress and productivity insights.

---


## Future Improvements

* User authentication
* Cloud database integration
* Google Calendar synchronization
* Email and push notifications
* Recurring tasks
* Team collaboration
* Mobile application
* Analytics and productivity reports
* Dark/Light theme switching
* Voice-based task creation

---

## Challenges Faced

During development, several practical challenges were addressed, including:

* Integrating Gemini AI into the recommendation workflow
* Designing an intuitive productivity dashboard
* Managing task state efficiently
* Deploying a React + Vite application on Vercel
* Resolving case-sensitive file import issues during deployment

---

## Team

Developed as part of a Hackathon project.

* Arpit Kumar

---

## License

This project has been developed for educational and hackathon purposes.
