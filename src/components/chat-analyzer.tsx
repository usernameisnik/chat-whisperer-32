import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileUpload } from '@/components/ui/file-upload';
import { AnalysisResults } from '@/components/analysis-results';
import { Brain, Heart, MessageCircle, TrendingUp } from 'lucide-react';

// Mock analysis function - in a real app, this would call your AI backend
const analyzeChat = async (file: File): Promise<any> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Return mock data structure from your example
  return {
    communication_patterns: {
      message_frequency: {
        "User 1": 8645,
        "User 2": 6811
      },
      average_message_length: {
        "User 1": 17.05,
        "User 2": 20.59
      },
      media_usage: {
        "User 1": 186,
        "User 2": 122
      },
      emoji_usage: {
        "User 1": 258,
        "User 2": 437
      }
    },
    relationship_dynamics: {
      initiation_pattern: "User 1 initiates more",
      response_rates: {},
      conversation_balance: 0.79,
      relationship_stage: "developing"
    },
    topics_discussed: [
      { topic: "Work", frequency: 365, sentiment: "neutral" },
      { topic: "Food", frequency: 138, sentiment: "positive" },
      { topic: "Plans", frequency: 96, sentiment: "positive" },
      { topic: "Movies/TV", frequency: 82, sentiment: "positive" },
      { topic: "Sports", frequency: 64, sentiment: "neutral" },
      { topic: "Travel", frequency: 32, sentiment: "positive" },
      { topic: "Family", frequency: 32, sentiment: "neutral" },
      { topic: "Emotions", frequency: 6, sentiment: "positive" }
    ],
    time_patterns: {
      most_active_hours: [19, 20, 21, 22, 23],
      weekly_pattern: {
        "Monday": 2538,
        "Tuesday": 1983,
        "Wednesday": 2030,
        "Thursday": 2308,
        "Friday": 2035,
        "Saturday": 1480,
        "Sunday": 3082
      }
    },
    language_analysis: {
      sentence_complexity: 2.85,
      vocabulary_richness: 0.11,
      slang_usage: {
        "lol": 609,
        "lmao": 48,
        "idk": 39,
        "btw": 4,
        "tbh": 2,
        "nvm": 2
      },
      language_style: "casual"
    },
    details: {
      flirting_skill: 0.003,
      conversation_flow: 3.81,
      humor: 0.43,
      confidence: 2.4,
      engagement: 6.74,
      response_time: 6
    },
    rizz_score: 3.23,
    success: true
  };
};

export const ChatAnalyzer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAnalysisResults(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    try {
      const results = await analyzeChat(selectedFile);
      setAnalysisResults(results);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (analysisResults) {
    return <AnalysisResults data={analysisResults} onReset={() => {
      setAnalysisResults(null);
      setSelectedFile(null);
    }} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/fa54d6bf-0456-40c2-8c29-148cca3f1299.png" 
              alt="Lyzn.AI" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-garamond text-6xl md:text-8xl font-medium italic text-primary mb-6">
            Decode the Language of Love
          </h1>
          <p className="font-garamond text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Stop guessing and start analyzing. Upload your chat history and let our AI-powered analysis reveal the true potential of your connection.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <FileUpload onFileSelect={handleFileSelect} />
          {selectedFile && (
            <div className="mt-6 text-center">
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="bg-primary text-primary-foreground border border-border shadow-soft px-8 py-3 font-medium"
              >
                {isAnalyzing ? 'Analyzing Chat...' : 'Analyze Your Connection'}
              </Button>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 text-center">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-garamond text-xl font-medium text-foreground mb-3">
                Deep Analysis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Go beyond words. We analyze reply times, emoji usage, and conversation flow patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-garamond text-xl font-medium text-foreground mb-3">
                The Love Score
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get a data-driven score that represents the romantic potential of your connection.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-garamond text-xl font-medium text-foreground mb-3">
                AI-Powered Insights
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive detailed insights about communication patterns and relationship dynamics.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};