import React from 'react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BloodTestResult {
  name: string;
  value: number;
  unit: string;
  normalRange: string;
  status: 'normal' | 'high' | 'low' | 'critical';
  trend?: 'up' | 'down' | 'stable';
}

interface ResultsCardProps {
  results: BloodTestResult[];
  className?: string;
}

const getStatusColor = (status: BloodTestResult['status']) => {
  switch (status) {
    case 'normal':
      return 'text-accent border-accent-light bg-accent-light/50';
    case 'high':
      return 'text-destructive border-destructive/20 bg-destructive/10';
    case 'low':
      return 'text-primary border-primary/20 bg-primary/10';
    case 'critical':
      return 'text-destructive border-destructive bg-destructive/20';
    default:
      return 'text-muted-foreground border-border bg-muted/50';
  }
};

const getStatusIcon = (status: BloodTestResult['status']) => {
  switch (status) {
    case 'normal':
      return <CheckCircle className="h-4 w-4" />;
    case 'high':
    case 'low':
      return <AlertTriangle className="h-4 w-4" />;
    case 'critical':
      return <AlertTriangle className="h-4 w-4 fill-current" />;
    default:
      return <Minus className="h-4 w-4" />;
  }
};

const getTrendIcon = (trend?: BloodTestResult['trend']) => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-3 w-3 text-destructive" />;
    case 'down':
      return <TrendingDown className="h-3 w-3 text-accent" />;
    case 'stable':
      return <Minus className="h-3 w-3 text-muted-foreground" />;
    default:
      return null;
  }
};

export const ResultsCard: React.FC<ResultsCardProps> = ({ results, className }) => {
  return (
    <div className={cn("bg-card rounded-lg shadow-soft border border-border p-6", className)}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Blood Test Results</h2>
        <p className="text-muted-foreground">Analysis of your recent blood work</p>
      </div>
      
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-lg border transition-smooth hover:shadow-medium",
              getStatusColor(result.status)
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getStatusIcon(result.status)}
                <h3 className="font-semibold">{result.name}</h3>
                {getTrendIcon(result.trend)}
              </div>
              <span className="text-sm font-medium px-2 py-1 bg-background/50 rounded">
                {result.status.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="font-semibold text-lg">{result.value}</span>
                <span className="ml-1 text-muted-foreground">{result.unit}</span>
              </div>
              <div className="text-muted-foreground">
                Normal: {result.normalRange}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};