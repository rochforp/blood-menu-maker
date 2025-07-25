import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { UploadZone } from '@/components/UploadZone';
import { ResultsCard } from '@/components/ResultsCard';
import { MenuRecommendations } from '@/components/MenuRecommendations';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

// Mock data for demonstration
const mockResults = [
  {
    name: 'Vitamin D',
    value: 18,
    unit: 'ng/mL',
    normalRange: '30-50',
    status: 'low' as const,
    trend: 'down' as const,
  },
  {
    name: 'B12',
    value: 350,
    unit: 'pg/mL',
    normalRange: '300-900',
    status: 'normal' as const,
    trend: 'stable' as const,
  },
  {
    name: 'Iron',
    value: 180,
    unit: 'μg/dL',
    normalRange: '60-170',
    status: 'high' as const,
    trend: 'up' as const,
  },
  {
    name: 'Cholesterol',
    value: 240,
    unit: 'mg/dL',
    normalRange: '<200',
    status: 'critical' as const,
    trend: 'up' as const,
  },
];

const mockMenuRecommendations = [
  {
    id: '1',
    name: 'Vitamin D Boost Bowl',
    description: 'Salmon, fortified cereals, and vitamin D rich ingredients to support bone health',
    prepTime: 25,
    servings: 2,
    difficulty: 'Easy' as const,
    rating: 4.8,
    image: '',
    nutrients: [
      { name: 'Vitamin D', amount: '15 μg', dailyValue: 75 },
      { name: 'Omega-3', amount: '2.3g', dailyValue: 100 },
    ],
    benefits: ['Bone Health', 'Immune Support', 'Heart Health'],
    ingredients: ['Fresh Salmon', 'Fortified Cereal', 'Spinach', 'Eggs'],
  },
  {
    id: '2',
    name: 'Iron Balance Salad',
    description: 'Carefully crafted to moderate iron levels while maintaining nutritional balance',
    prepTime: 15,
    servings: 1,
    difficulty: 'Easy' as const,
    rating: 4.6,
    image: '',
    nutrients: [
      { name: 'Vitamin C', amount: '85mg', dailyValue: 90 },
      { name: 'Folate', amount: '180μg', dailyValue: 45 },
    ],
    benefits: ['Iron Regulation', 'Antioxidants', 'Fiber Rich'],
    ingredients: ['Mixed Greens', 'Citrus', 'Tomatoes', 'Cucumber'],
  },
  {
    id: '3',
    name: 'Heart-Healthy Oats',
    description: 'Cholesterol-lowering breakfast with oats, berries, and heart-healthy fats',
    prepTime: 10,
    servings: 1,
    difficulty: 'Easy' as const,
    rating: 4.9,
    image: '',
    nutrients: [
      { name: 'Beta-glucan', amount: '3g', dailyValue: 100 },
      { name: 'Fiber', amount: '8g', dailyValue: 32 },
    ],
    benefits: ['Cholesterol Control', 'Heart Health', 'Sustained Energy'],
    ingredients: ['Steel-cut Oats', 'Blueberries', 'Walnuts', 'Cinnamon'],
  },
];

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // Simulate processing time
    setTimeout(() => setShowResults(true), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Transform
                </span>{' '}
                Your Health with{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Smart Nutrition
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your blood test results and receive personalized meal recommendations 
                tailored to optimize your health markers and nutritional needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-accent" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-destructive" />
                  <span>Evidence-Based</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-strong">
                <img
                  src={heroImage}
                  alt="Blood test analysis dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upload Your Blood Test Results</h2>
              <p className="text-xl text-muted-foreground">
                Secure, private analysis of your health data
              </p>
            </div>
            
            <UploadZone onFileUpload={handleFileUpload} className="mb-8" />
            
            {uploadedFile && !showResults && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-primary">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                  <span>Analyzing your results...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <>
          <section id="analysis" className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Your Blood Test Analysis</h2>
                  <p className="text-xl text-muted-foreground">
                    Comprehensive breakdown of your health markers
                  </p>
                </div>
                
                <ResultsCard results={mockResults} />
              </div>
            </div>
          </section>

          <section id="menu" className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <MenuRecommendations recommendations={mockMenuRecommendations} />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Index;
