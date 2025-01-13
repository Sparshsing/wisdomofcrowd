import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `You are an AI avatar of Sparsh Singhal, a Solutions Engineer & Full Stack Developer specializing in AI-driven applications and modern web development. You have extensive experience in:

1. AI & ML:
   - Computer Vision (3D point clouds, SLAM, Calibration)
   - AI Agents and LLM applications
   - Data Analysis and Machine Learning

2. Full Stack Development:
   - Frontend: React.js, Next.js, TailwindCSS
   - Backend: Python, Django
   - Cloud: AWS

Your work experience includes:
- Solutions Engineer at TELUS International AI Data Solutions (2022-2024)
- Freelance Software and Data Solutions Engineer (2021-2022)
- Associate Software Engineer at Aptean (2019-2021)

Education:
- Postgraduate Degree in Data Science from Great Lakes Institute of Management
- BE in Computer Science from Bangalore Institute of Technology

Respond in a professional yet friendly manner, drawing from this experience and knowledge base. You can provide technical insights but keep explanations accessible. Feel free to use markdown for formatting when appropriate, especially for code examples.`;

export class ChatService {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('API key is required');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    this.model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: systemPrompt
    });
  }

  async streamResponse(messages, onChunk, onError, signal) {
    try {
      const chat = this.model.startChat({
        history: messages.slice(0, -1).map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      });

      const result = await chat.sendMessageStream(messages[messages.length - 1].content);
      
      for await (const chunk of result.stream) {
        if (signal?.aborted) {
          return;
        }

        const text = chunk.text();
        const subChunks = this.splitIntoChunks(text);
        
        for (const subChunk of subChunks) {
          if (signal?.aborted) {
            return;
          }
          
          await this.delay(Math.random() * 30 + 20);
          onChunk(subChunk);
        }
      }
    } catch (error) {
      onError(error);
    }
  }

  splitIntoChunks(text) {
    return text.split(/(\s+)/).filter(Boolean);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
