import React from 'react';

interface ArchitectureViewProps {
  onBack: () => void;
}

const ArchitectureView: React.FC<ArchitectureViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
        <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-8 relative">
            <button onClick={onBack} className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 font-bold flex items-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
            </button>
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">System Architecture: Full Stack Migration</h2>
            
            <div className="w-full overflow-x-auto flex justify-center py-4">
                <svg width="850" height="520" viewBox="0 0 900 520" xmlns="http://www.w3.org/2000/svg">
                    {/* Definitions for arrowheads */}
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                        </marker>
                    </defs>

                    {/* CLIENT SIDE */}
                    <rect x="50" y="100" width="200" height="300" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
                    <text x="150" y="130" textAnchor="middle" fontWeight="bold" fill="#0369a1" fontSize="18">Frontend (Client)</text>
                    <text x="150" y="150" textAnchor="middle" fill="#0369a1" fontSize="14">(React + Vite)</text>
                    
                    {/* Inner Client Components */}
                    <rect x="70" y="170" width="160" height="40" rx="5" fill="#ffffff" stroke="#bae6fd" />
                    <text x="150" y="195" textAnchor="middle" fontSize="12" fill="#334155">UI Components (Pages)</text>

                    <rect x="70" y="220" width="160" height="40" rx="5" fill="#ffffff" stroke="#bae6fd" />
                    <text x="150" y="245" textAnchor="middle" fontSize="12" fill="#334155">Face API (Biometrics)</text>

                    <rect x="70" y="270" width="160" height="40" rx="5" fill="#ffffff" stroke="#bae6fd" />
                    <text x="150" y="295" textAnchor="middle" fontSize="12" fill="#334155">Axios (HTTP Calls)</text>

                    {/* SERVER SIDE */}
                    <rect x="350" y="50" width="250" height="400" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
                    <text x="475" y="80" textAnchor="middle" fontWeight="bold" fill="#15803d" fontSize="18">Backend (Server)</text>
                    <text x="475" y="100" textAnchor="middle" fill="#15803d" fontSize="14">(Node.js + Express)</text>

                    {/* Inner Server Components */}
                    <rect x="370" y="130" width="210" height="40" rx="5" fill="#ffffff" stroke="#bbf7d0" />
                    <text x="475" y="155" textAnchor="middle" fontSize="12" fill="#334155">API Routes (/api/*)</text>

                    <rect x="370" y="180" width="210" height="40" rx="5" fill="#ffffff" stroke="#bbf7d0" />
                    <text x="475" y="205" textAnchor="middle" fontSize="12" fill="#334155">Auth Middleware (JWT)</text>

                    <rect x="370" y="230" width="210" height="40" rx="5" fill="#ffffff" stroke="#bbf7d0" />
                    <text x="475" y="255" textAnchor="middle" fontSize="12" fill="#334155">Controllers (Logic)</text>

                    <rect x="370" y="350" width="210" height="60" rx="5" fill="#fef9c3" stroke="#facc15" strokeWidth="2" />
                    <text x="475" y="375" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#854d0e">Cron Job (Scheduler)</text>
                    <text x="475" y="395" textAnchor="middle" fontSize="10" fill="#854d0e">Checks Missed Doses Every Minute</text>

                    {/* DATABASE */}
                    <rect x="700" y="150" width="150" height="150" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
                    <text x="775" y="180" textAnchor