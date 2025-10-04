import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Bot, User, Key, Sparkles, History, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const HistoryAI = () => {
  // Hardcoded Gemini API key
  const apiKey = 'AIzaSyDSko8wc_5Yyeol6GMuXm39I8BC1TkSmTA'; // Replace with your actual API key
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'assistant',
      content: "Hello! I'm your History AI assistant powered by Google's Gemini. I'm here to help you explore the fascinating world of history - from ancient civilizations to modern times. Ask me anything about historical events, figures, civilizations, or time periods. What would you like to learn about today?",
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: currentMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a knowledgeable history expert and assistant. Your role is to provide accurate, engaging, and educational information about historical topics. Please answer this question about history: ${currentMessage.trim()}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I could not generate a response. Please try again.';

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast.error('Failed to get response from AI. Please check your API key and try again.');
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please make sure your API key is valid and try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestedQuestions = [
    "Tell me about the fall of the Roman Empire",
    "What were the major achievements of ancient Egypt?",
    "Explain the causes of World War I",
    "How did the Renaissance change European society?",
    "What was daily life like in medieval times?",
    "Tell me about the Silk Road trade routes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
          <div className="flex items-center gap-6">
            <Button variant="ghost" asChild className="text-white hover:bg-white/20 rounded-full">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-neural-glow" />
              <span className="text-white font-medium">History AI</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Chat Interface */}
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Bot className="w-8 h-8 text-neural-glow" />
                <h1 className="text-3xl font-bold text-white">History AI Assistant</h1>
              </div>
              <p className="text-white/70">Powered by Google Gemini</p>
            </div>

            {/* Chat Messages */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-0">
                  <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
                    {messages.length === 0 ? (
                      <div className="text-center py-8">
                        <BookOpen className="w-12 h-12 text-neural-glow/50 mx-auto mb-4" />
                        <p className="text-white/60 mb-4">Start a conversation about history!</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                          {suggestedQuestions.map((question, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentMessage(question)}
                              className="text-left bg-white/5 border-white/20 text-white/80 hover:bg-white/10 text-xs p-2 h-auto"
                            >
                              {question}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                message.role === 'user' 
                                  ? 'bg-neural-glow text-background' 
                                  : 'bg-white/10 text-neural-glow'
                              }`}>
                                {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                              </div>
                              <div className={`rounded-xl p-3 ${
                                message.role === 'user'
                                  ? 'bg-neural-glow text-black'
                                  : 'bg-white/10 text-white'
                              }`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                <p className={`text-xs mt-2 ${
                                  message.role === 'user' ? 'text-black/70' : 'text-white/50'
                                }`}>
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 text-neural-glow flex items-center justify-center">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div className="bg-white/10 rounded-xl p-3">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-neural-glow rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-neural-glow rounded-full animate-bounce" style={{ animationDelay: '0.1s' } as React.CSSProperties} />
                                <div className="w-2 h-2 bg-neural-glow rounded-full animate-bounce" style={{ animationDelay: '0.2s' } as React.CSSProperties} />
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>

            {/* Message Input */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Textarea
                    placeholder="Ask me anything about history..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                    rows={2}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!currentMessage.trim() || isLoading}
                    className="bg-neural-glow hover:bg-neural-glow/90 text-background self-end"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            {messages.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="border-white/20 text-white/70">
                  Tip: Ask for specific dates, events, or historical figures
                </Badge>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAI;