'use client';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
    <div className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col">
      <h1 className="text-4xl font-bold mb-8">AI Chat</h1>
      
      <div className="flex-1 mb-4 space-y-4 overflow-y-auto max-h-[60vh]">
        {messages.length === 0 && !currentResponse && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Start a conversation by typing a message below.
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-100 dark:bg-blue-900 ml-auto max-w-[80%]'
                : 'bg-gray-100 dark:bg-gray-800 mr-auto max-w-[80%]'
            }`}
          >
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
        ))}
        
        {currentResponse && (
          <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 mr-auto max-w-[80%]">
            <div className="text-sm font-semibold mb-1">AI</div>
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown components={MarkdownComponents}>
                {currentResponse}
              </ReactMarkdown>
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

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          disabled={isLoading}
        />
        {isStreaming ? (
          <button
            type="button"
            onClick={handleStop}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        )}
      </form>
    </div>
  );
}