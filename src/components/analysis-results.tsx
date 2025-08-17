import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Heart, MessageSquare, Clock, Brain, Smile, Zap } from 'lucide-react';

interface AnalysisResultsProps {
  data: any;
  onReset: () => void;
}

export const AnalysisResults: React.FC<AnalysisResultsProps> = ({ data, onReset }) => {
  const rizzScore = Math.round(data.rizz_score * 10) / 10;
  const scorePercentage = (rizzScore / 10) * 100;

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-green-600';
    if (score >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 8) return 'Exceptional Connection';
    if (score >= 6) return 'Strong Potential';
    if (score >= 4) return 'Moderate Interest';
    if (score >= 2) return 'Building Foundation';
    return 'Early Stages';
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const getTopTopics = () => {
    return data.topics_discussed
      .sort((a: any, b: any) => b.frequency - a.frequency)
      .slice(0, 5);
  };

  const getMostActiveDay = () => {
    const days = data.time_patterns.weekly_pattern;
    return Object.entries(days).reduce((a: [string, number], b: [string, number]) => 
      days[a[0]] > days[b[0]] ? a : b
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/fa54d6bf-0456-40c2-8c29-148cca3f1299.png" 
                alt="Lyzn.AI" 
                className="h-12 w-auto"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={onReset}
              className="bg-background border-border"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Analyze Another Chat
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Overall Score */}
        <div className="text-center mb-12">
          <div className="bg-card border border-border shadow-soft p-12 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-garamond text-4xl font-medium text-foreground mb-4">
              Your Connection Score
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className={`font-reddit text-6xl font-bold ${getScoreColor(rizzScore)}`}>
                {rizzScore}
              </span>
              <span className="font-reddit text-2xl text-muted-foreground">/10</span>
            </div>
            <p className="font-garamond text-xl text-foreground mb-4">
              {getScoreLabel(rizzScore)}
            </p>
            <div className="max-w-md mx-auto">
              <Progress value={scorePercentage} className="h-3" />
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <Zap className="h-5 w-5 text-primary" />
                Flirting Skill
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {Math.round(data.details.flirting_skill * 1000) / 10}%
              </div>
              <Progress value={data.details.flirting_skill * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <MessageSquare className="h-5 w-5 text-primary" />
                Conversation Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {Math.round(data.details.conversation_flow * 10) / 10}/10
              </div>
              <Progress value={(data.details.conversation_flow / 10) * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <Smile className="h-5 w-5 text-primary" />
                Humor Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {Math.round(data.details.humor * 100)}%
              </div>
              <Progress value={data.details.humor * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <Brain className="h-5 w-5 text-primary" />
                Confidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {Math.round(data.details.confidence * 10) / 10}/10
              </div>
              <Progress value={(data.details.confidence / 10) * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <Heart className="h-5 w-5 text-primary" />
                Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {Math.round(data.details.engagement * 10) / 10}/10
              </div>
              <Progress value={(data.details.engagement / 10) * 100} className="h-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 font-garamond text-lg">
                <Clock className="h-5 w-5 text-primary" />
                Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-2">
                {data.details.response_time}/10
              </div>
              <Progress value={(data.details.response_time / 10) * 100} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Communication Patterns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-garamond text-xl">Message Frequency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(data.communication_patterns.message_frequency).map(([person, count]: [string, any]) => (
                  <div key={person} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{person}</span>
                    <span className="text-primary font-bold">{formatNumber(count)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-garamond text-xl">Communication Style</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Language Style</span>
                  <span className="text-primary font-medium capitalize">
                    {data.language_analysis.language_style}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Vocabulary Richness</span>
                  <span className="text-primary font-medium">
                    {Math.round(data.language_analysis.vocabulary_richness * 100)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Relationship Stage</span>
                  <span className="text-primary font-medium capitalize">
                    {data.relationship_dynamics.relationship_stage}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Topics & Patterns */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-garamond text-xl">Top Discussion Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {getTopTopics().map((topic: any, index: number) => (
                  <div key={topic.topic} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="font-medium text-foreground">{topic.topic}</span>
                    </div>
                    <span className="text-primary font-bold">{topic.frequency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-garamond text-xl">Activity Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                 <div>
                   <p className="text-sm text-muted-foreground mb-2">Most Active Day</p>
                   <p className="text-lg font-bold text-primary">
                     {getMostActiveDay()[0]} ({formatNumber(Number(getMostActiveDay()[1]))} messages)
                   </p>
                 </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Peak Hours</p>
                  <p className="text-lg font-bold text-primary">
                    {data.time_patterns.most_active_hours.map((hour: number) => `${hour}:00`).join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Conversation Balance</p>
                  <p className="text-lg font-bold text-primary">
                    {Math.round(data.relationship_dynamics.conversation_balance * 100)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};