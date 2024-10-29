import React, { useState } from 'react';
import { AlertTriangle, Shield, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const CyberDiagnosticTool = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [severity, setSeverity] = useState('low');

  const symptoms = {
    'watering-hole': [
      'Legitimate website behaving strangely',
      'Unexpected download prompts',
      'Browser redirects to different sites'
    ],
    'spearphishing': [
      'Urgent email requesting sensitive information',
      'Sender claims to be from known organization',
      'Poor grammar or spelling mistakes'
    ],
    'denial-of-service': [
      'Website or service is unusually slow',
      'Cannot access specific services',
      'Multiple error messages when accessing service'
    ],
    'ai-prompt-injection': [
      'AI system providing unexpected responses',
      'AI revealing sensitive information',
      'AI ignoring safety constraints'
    ]
  };

  const handleSymptomSelect = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const slides = [
    // Slide 1: Welcome
    <div key="welcome" className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">Cyber Security Diagnostic Tool</h2>
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          This tool helps you identify potential cyber attacks and guides you through the reporting process.
        </AlertDescription>
      </Alert>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="font-semibold mb-2">How to use this tool:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Describe the suspicious activity you're experiencing</li>
          <li>Answer a few questions about the situation</li>
          <li>Get an assessment and recommended actions</li>
          <li>Report the incident if necessary</li>
        </ul>
      </div>
    </div>,

    // Slide 2: Symptom Selection
    <div key="symptoms" className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What are you experiencing?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(symptoms).map(([category, categorySymptoms]) => (
          <div key={category} className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2 capitalize">{category.replace('-', ' ')} Signs:</h3>
            {categorySymptoms.map((symptom) => (
              <div key={symptom} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleSymptomSelect(symptom)}
                  className="w-4 h-4"
                />
                <label className="text-sm">{symptom}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>,

    // Slide 3: Analysis & Recommendation
    <div key="analysis" className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Analysis & Recommendations</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Potential Attack Type:</h3>
          <div className="flex items-center space-x-2">
            <Shield className="text-yellow-500" />
            <span className="text-lg">
              {selectedSymptoms.length > 0 ? 
                selectedSymptoms.includes('AI system providing unexpected responses') 
                  ? 'AI Prompt Injection Attack' 
                  : selectedSymptoms.includes('Website or service is unusually slow')
                    ? 'Denial of Service Attack'
                    : 'Potential Phishing Attack'
                : 'Please select symptoms for analysis'}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Severity Level:</h3>
          <select 
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Recommended Actions:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Document all suspicious activities</li>
            <li>Take screenshots of any unusual behavior</li>
            <li>Do not provide any sensitive information</li>
            <li>Report to your IT department if applicable</li>
          </ul>
        </div>
      </div>
    </div>,

    // Slide 4: Report
    <div key="report" className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Report the Incident</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Incident Description</label>
            <textarea 
              className="w-full p-2 border rounded h-32"
              placeholder="Describe what happened..."
            />
          </div>
          <div>
            <label className="block mb-2">Contact Information</label>
            <input 
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your email address"
            />
          </div>
          <button 
            type="button"
            className="flex items-center justify-center w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Report
          </button>
        </form>
      </div>
    </div>
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {slides[currentSlide]}
        
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="flex items-center px-4 py-2 bg-gray-100 rounded-lg disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
          <button
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberDiagnosticTool;