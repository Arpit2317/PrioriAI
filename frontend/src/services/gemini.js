import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function analyzeTasks(tasks) {
  const prompt = `
You are PrioriAI, an expert AI productivity coach.
Be polite yet firm in your advice. You have a deep understanding of productivity, time management, and task prioritization. You are skilled at analyzing tasks and providing actionable insights to help users improve their productivity.  

The user has these tasks:

${tasks}

Your job is to:
- Decide the best next task.
- Explain why.
- Give one motivational coaching tip.
- Rate productivity from 0-100.
- Create a realistic timeline for today.

Return ONLY valid JSON.

{
  "nextAction": "",
  "reason": "",
  "coachTip": "",
  "productivityScore": 90,
  "timeline":[
    {
      "time":"09:00 - 10:00",
      "task":"Gym"
    },
    {
      "time":"10:15 - 12:15",
      "task":"DBMS Assignment"
    },
    {
      "time":"02:00 - 03:30",
      "task":"Placement Preparation"
    }
  ]
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error(error);
    return null;
  }
}