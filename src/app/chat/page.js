'use client';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from '../components/Header';

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const abortController = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentResponse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setIsStreaming(true);
    const newMessage = { role: 'user', content: prompt };
    setMessages(prev => [...prev, newMessage]);
    setCurrentResponse('');
    setPrompt('');

    // Create new AbortController for this request
    abortController.current = new AbortController();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage]
        }),
        signal: abortController.current.signal, // Add abort signal
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        fullResponse += chunk;
        setCurrentResponse(fullResponse);
      }

      // After streaming is complete, add the full message to the chat
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: fullResponse 
      }]);
      setCurrentResponse('');

    } catch (error) {
      if (error.name === 'AbortError') {
        // Handle abort case
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: currentResponse + '\n\n_Response stopped by user._' 
        }]);
      } else {
        console.error('Error:', error);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Sorry, there was an error processing your request.' 
        }]);
      }
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      abortController.current = null;
    }
  };

  // Add stop handler
  const handleStop = () => {
    if (abortController.current) {
      abortController.current.abort();
    }
  };

  // Custom renderer components for ReactMarkdown
  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      return !inline ? (
        <SyntaxHighlighter
          style={coldarkDark}
          language={language}
          PreTag="div"
          className="rounded-md"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className="bg-gray-800 dark:bg-gray-700 rounded px-1 py-0.5" {...props}>
          {children}
        </code>
      );
    },
    // Add custom styling for other markdown elements
    p: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mb-2">{children}</h3>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 mb-4 italic">
        {children}
      </blockquote>
    ),
    // Add link handler
    a: ({ children, href }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
        {children}
      </a>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">Sparsh's AI Assistant</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg">
              👋 Hi! I'm an AI assistant currently under development. Feel free to chat with me, but please note that I'm still learning and improving.
              For any questions or feedback, reach out to{' '}
              <a href="mailto:sparshsing96@gmail.com" className="text-blue-500 hover:text-blue-600">
                sparshsing96@gmail.com
              </a>
            </p>
          </div>
          
          <div className="flex-1 mb-4 space-y-4 overflow-y-auto max-h-[calc(100vh-400px)] rounded-lg bg-white dark:bg-gray-800 p-4 shadow-lg">
            {messages.length === 0 && !currentResponse && (
              <div className="text-center text-gray-500 dark:text-gray-400">
                Start a conversation by typing a message below.
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm ${
                  message.role === 'user'
                    ? 'bg-blue-50 dark:bg-blue-900/50 ml-auto max-w-[80%]'
                    : 'bg-gray-50 dark:bg-gray-800/50 mr-auto max-w-[80%] flex gap-3'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">
                    {message.role === 'user' ? 'You' : 'AI'}
                  </div>
                  {message.role === 'user' ? (
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  ) : (
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown components={MarkdownComponents}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {currentResponse && (
              <div className="p-4 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 mr-auto max-w-[80%] flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold mb-1">AI</div>
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown components={MarkdownComponents}>
                      {currentResponse}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            )}
            
            {isLoading && !currentResponse && (
              <div 
                role="status" 
                className="flex items-center justify-center"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="sticky bottom-0 bg-gray-50 dark:bg-gray-900 p-4 flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              disabled={isLoading}
            />
            {isStreaming ? (
              <button
                type="button"
                onClick={handleStop}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
              >
                Stop
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Send
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}