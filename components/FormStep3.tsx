'use client';

import { useState } from 'react';

interface FormStep3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

type DocumentsState = {
  [key: string]: boolean;
};

type PreferencesState = {
  [key: string]: string;
};

export default function FormStep3({ data, updateData, onNext, onPrev }: FormStep3Props) {
  // États typés
  const [documents, setDocuments] = useState<DocumentsState>({
    carteIdentite: false,
    justificatifDomicile: false,
    photoIdentite: false,
    certificatMedical: false,
    assr: false,
    permisExistant: false,
    ...data.documents,
  });

  const [preferences, setPreferences] = useState<PreferencesState>({
    autoEcole: '',
    modeFormation: 'traditionnelle',
    commentaires: '',
    ...data.preferences,
  });

  const autoEcoles = [
    'Auto-École du Centre',
    'Permis Plus',
    'École de Conduite Moderne',
    'Formation Conduite Pro',
    'Auto-École des Boulevards',
    'Conduite Facile',
  ];

  const requiredDocs = [
    {
      id: 'carteIdentite',
      title: "Carte d'identité ou passeport",
      description: "Document d'identité valide",
      required: true,
    },
    {
      id: 'justificatifDomicile',
      title: 'Justificatif de domicile',
      description: 'Facture de moins de 6 mois',
      required: true,
    },
    {
      id: 'photoIdentite',
      title: "Photo d'identité",
      description: "2 photos d'identité récentes",
      required: true,
    },
    {
      id: 'certificatMedical',
      title: 'Certificat médical',
      description: 'Obligatoire pour certains permis',
      required: data.permisType === 'C' || data.permisType === 'D',
    },
    {
      id: 'assr',
      title: 'ASSR ou ASR',
      description: 'Attestation scolaire de sécurité routière',
      required: data.permisType === 'B',
    },
    {
      id: 'permisExistant',
      title: 'Permis existant',
      description: 'Si vous possédez déjà un permis',
      required: false,
    },
  ];

  // --- Handlers corrigés et typés ---
const handleDocumentChange = (docId: string) => {
  setDocuments((prev: DocumentsState) => ({
    ...prev,
    [docId]: !prev[docId],
  }));
};


  const handlePreferenceChange = (field: string, value: string) => {
    setPreferences((prev: PreferencesState) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    const requiredDocsCheck = requiredDocs
      .filter((doc) => doc.required)
      .every((doc) => documents[doc.id]);

    if (!requiredDocsCheck) {
      alert('Veuillez cocher tous les documents obligatoires');
      return;
    }

    updateData({ documents, preferences });
    onNext();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Documents et Préférences
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Confirmez que vous disposez des documents requis et indiquez vos préférences
      </p>

      {/* Documents Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Documents Requis
        </h4>
        <div className="space-y-4">
          {requiredDocs.map((doc) => (
            <div
              key={doc.id}
              className={`border rounded-lg p-4 ${
                doc.required ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name={doc.id}
                    checked={documents[doc.id]}
                    onChange={() => handleDocumentChange(doc.id)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center">
                    <h5 className="font-semibold text-gray-900">{doc.title}</h5>
                    {doc.required && (
                      <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
                        Obligatoire
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          * Vous devrez fournir ces documents lors de votre inscription
        </p>
      </div>

      {/* Preferences Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Préférences de Formation
        </h4>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Auto-École Préférée
            </label>
            <div className="relative">
              <select
                name="autoEcole"
                value={preferences.autoEcole}
                onChange={(e) => handlePreferenceChange('autoEcole', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none pr-8"
              >
                <option value="">Sélectionnez une auto-école</option>
                {autoEcoles.map((ecole) => (
                  <option key={ecole} value={ecole}>
                    {ecole}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mode de Formation
            </label>
            <div className="space-y-2">
              {[
                { value: 'traditionnelle', label: 'Formation traditionnelle' },
                { value: 'acceleree', label: 'Formation accélérée' },
                { value: 'conduite-accompagnee', label: 'Conduite accompagnée' },
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="modeFormation"
                    value={option.value}
                    checked={preferences.modeFormation === option.value}
                    onChange={(e) => handlePreferenceChange('modeFormation', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Commentaires ou Demandes Spéciales
          </label>
          <textarea
            name="commentaires"
            value={preferences.commentaires}
            onChange={(e) => {
              if (e.target.value.length <= 500) {
                handlePreferenceChange('commentaires', e.target.value);
              }
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            rows={4}
            placeholder="Indiquez vos préférences d'horaires, besoins spécifiques..."
            maxLength={500}
          />
          <p className="text-xs text-gray-500 mt-1">
            {preferences.commentaires.length}/500 caractères
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-arrow-left-line mr-2"></i>
          Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold whitespace-nowrap cursor-pointer"
        >
          Continuer
          <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}
