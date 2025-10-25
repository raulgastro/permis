'use client';

import { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';

export default function FormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    permisType: '',
    personalInfo: {
      nom: '',
      prenom: '',
      dateNaissance: '',
      lieuNaissance: '',
      nationalite: '',
      adresse: '',
      codePostal: '',
      ville: '',
      telephone: '',
      email: ''
    },
    documents: {},
    preferences: {}
  });

  const steps = [
    { number: 1, title: 'Type de Permis', description: 'Sélectionnez votre permis' },
    { number: 2, title: 'Informations', description: 'Vos données personnelles' },
    { number: 3, title: 'Documents', description: 'Pièces justificatives' },
    { number: 4, title: 'Confirmation', description: 'Vérifiez et validez' }
  ];

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  // --- Merge pour ne pas écraser les données existantes ---
  const updateFormData = (stepData: any) => {
    setFormData(prev => ({
      ...prev,
      ...stepData,
      personalInfo: {
        ...prev.personalInfo,
        ...(stepData.personalInfo || {})
      },
      preferences: {
        ...prev.preferences,
        ...(stepData.preferences || {})
      },
      documents: {
        ...prev.documents,
        ...(stepData.documents || {})
      }
    }));
    console.log("FormData mis à jour :", stepData);  // Log des données mises à jour
  };

  return (
    <section id="formulaire" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Formulaire de Demande
          </h2>
          <p className="text-xl text-gray-600">
            Suivez ces étapes simples pour déposer votre demande de permis
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-2 transition-all ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <i className="ri-check-line"></i>
                  ) : (
                    step.number
                  )}
                </div>
                <div className="text-center">
                  <h3 className={`font-semibold ${
                    currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 hidden sm:block">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block absolute w-full h-0.5 top-6 left-1/2 transform -translate-y-1/2 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`} style={{ zIndex: -1 }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-gray-50 rounded-2xl p-8">
          {currentStep === 1 && (
            <FormStep1 
              data={formData} 
              updateData={updateFormData} 
              onNext={nextStep}
            />
          )}
          {currentStep === 2 && (
            <FormStep2 
              data={formData} 
              updateData={updateFormData} 
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <FormStep3 
              data={formData} 
              updateData={updateFormData} 
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 4 && (
            <FormStep4 
              data={formData} 
              onPrev={prevStep}
            />
          )}
        </div>
      </div>
    </section>
  );
}