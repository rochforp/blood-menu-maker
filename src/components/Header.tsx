import React from 'react';
import { Activity, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-primary p-2 rounded-lg">
            <Activity className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HealthMenu
            </h1>
            <p className="text-xs text-muted-foreground">Blood Test Analysis Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#upload" className="text-sm font-medium hover:text-primary transition-smooth">
            Upload Results
          </a>
          <a href="#analysis" className="text-sm font-medium hover:text-primary transition-smooth">
            Analysis
          </a>
          <a href="#menu" className="text-sm font-medium hover:text-primary transition-smooth">
            Menu Plans
          </a>
          <a href="#history" className="text-sm font-medium hover:text-primary transition-smooth">
            History
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};