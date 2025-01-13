import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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


const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    systemInstruction: systemPrompt});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function splitIntoChunks(text) {
  // Split by spaces but keep the spaces
  return text.split(/(\s+)/).filter(Boolean);
}


export async function POST(request) {
  try {
    const { messages } = await request.json();
    
    const chat = model.startChat({
      history: messages.slice(0, -1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }))
    });
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await chat.sendMessageStream(messages[messages.length - 1].content);
          
          for await (const chunk of result.stream) {
            // Check if the request has been aborted
            if (request.signal.aborted) {
              return; // Just return without closing the controller
            }

            const text = chunk.text();
            const subChunks = splitIntoChunks(text);
            
            for (const subChunk of subChunks) {
              // Move the abort check before the delay
              if (request.signal.aborted) {
                return; // Just return without closing the controller
              }
              
              try {
                await delay(Math.random() * 30 + 20);
                controller.enqueue(subChunk);
              } catch (error) {
                // If we get an error enqueueing, the stream is probably closed
                return;
              }
            }
          }
          
          // Only close the controller if we haven't aborted
          if (!request.signal.aborted) {
            controller.close();
          }
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream);
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}