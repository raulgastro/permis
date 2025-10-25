'use client';

import { useState } from 'react';

interface FormStep3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

type Documents = {
  [key: string]: File[];
};

type Preferences = {
  autoEcole: string;
  modeFormation: string;
  commentaires: string;
};

export default function FormStep3({ data, updateData, onNext, onPrev }: FormStep3Props) {
  // --- États pour les fichiers uploadés (tableaux pour jusqu'à 4 fichiers) ---
  const [documents, setDocuments] = useState<Documents>({
    idCard: data.documents?.idCard || [],
    proofOfAddress: data.documents?.proofOfAddress || [],
    photo: data.documents?.photo || [],
    medicalCertificate: data.documents?.medicalCertificate || [],
    assr: data.documents?.assr || [],
    existingLicense: data.documents?.existingLicense || [],
  });

  // --- États pour les préférences ---
  const [preferences, setPreferences] = useState<Preferences>({
    autoEcole: data.preferences?.autoEcole || '',
    modeFormation: data.preferences?.modeFormation || 'traditionnelle',
    commentaires: data.preferences?.commentaires || '',
  });

  // --- Liste d’auto-écoles ---
  const autoEcoles = [
    'Auto-École du Centre',
    'Permis Plus',
    'École de Conduite Moderne',
    'Formation Conduite Pro',
    'Auto-École des Boulevards',
    'Conduite Facile',
  ];

  // --- Fichiers requis selon le type de permis ---
  const requiredDocs = [
    { id: 'idCard', label: "Carte d'identité (recto/verso)", required: true },
    { id: 'proofOfAddress', label: 'Justificatif de domicile', required: true },
    { id: 'photo', label: "Photo d'identité", required: true },
    {
      id: 'medicalCertificate',
      label: 'Certificat médical (si permis C ou D)',
      required: data.permisType === 'C' || data.permisType === 'D',
    },
    {
      id: 'assr',
      label: 'ASSR / ASR (pour le permis B)',
      required: data.permisType === 'B',
    },
    { id: 'existingLicense', label: 'Permis existant (si applicable)', required: false },
  ];

  // --- Gestion des fichiers ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const currentFiles = documents[name] || [];
      const newFilesArray = [...currentFiles, ...Array.from(files)].slice(0, 4); // max 4 fichiers
      const updated = { ...documents, [name]: newFilesArray };
      setDocuments(updated);
      updateData({ documents: updated, preferences });
    }
  };

  // --- Supprimer un fichier spécifique ---
  const removeFile = (docId: string, index: number) => {
    const updatedFiles = [...(documents[docId] || [])];
    updatedFiles.splice(index, 1);
    const updated = { ...documents, [docId]: updatedFiles };
    setDocuments(updated);
    updateData({ documents: updated, preferences });
  };

  // --- Gestion des préférences ---
  const handlePreferenceChange = (field: keyof Preferences, value: string) => {
    const updated = { ...preferences, [field]: value };
    setPreferences(updated);
    updateData({ documents, preferences: updated });
  };

  // --- Validation avant de passer à l’étape suivante ---
  const handleNext = () => {
    const allRequiredProvided = requiredDocs
      .filter((doc) => doc.required)
      .every((doc) => (documents[doc.id] || []).length > 0);

    if (!allRequiredProvided) {
      alert('Merci de fournir tous les documents obligatoires.');
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

      {/* Documents upload */}
      <div className="space-y-6 mb-10">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Téléversez vos documents</h4>
        {requiredDocs.map((doc) => (
          <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <label className="block font-semibold text-gray-800 mb-2">
              {doc.label} {doc.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="file"
              name={doc.id}
              accept="image/*,.pdf"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
            />

            {/* Affichage des fichiers sélectionnés */}
            {(documents[doc.id] || []).length > 0 && (
              <ul className="text-green-600 text-sm mt-2">
                {documents[doc.id].map((file, index) => (
                  <li key={index} className="flex justify-between items-center">
                    ✅ {file.name}
                    <button
                      type="button"
                      onClick={() => removeFile(doc.id, index)}
                      className="text-red-500 ml-2"
                    >
                      Supprimer
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Vous pouvez ajouter jusqu'à 4 fichiers.
            </p>
          </div>
        ))}
      </div>

      {/* Préférences */}
      <div className="mb-10">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Vos préférences</h4>

        {/* Auto-école */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Auto-école préférée
          </label>
          <select
            value={preferences.autoEcole}
            onChange={(e) => handlePreferenceChange('autoEcole', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez une auto-école</option>
            {autoEcoles.map((ecole) => (
              <option key={ecole} value={ecole}>
                {ecole}
              </option>
            ))}
          </select>
        </div>

        {/* Mode de formation */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mode de formation
          </label>
          <div className="space-y-2">
            {[
              { value: 'traditionnelle', label: 'Formation traditionnelle' },
              { value: 'acceleree', label: 'Formation accélérée' },
              { value: 'conduite-accompagnee', label: 'Conduite accompagnée' },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center">
                <input
                  type="radio"
                  name="modeFormation"
                  value={opt.value}
                  checked={preferences.modeFormation === opt.value}
                  onChange={(e) => handlePreferenceChange('modeFormation', e.target.value)}
                  className="mr-2"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Commentaires */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Commentaires ou demandes spéciales
          </label>
          <textarea
            value={preferences.commentaires}
            onChange={(e) => {
              if (e.target.value.length <= 500)
                handlePreferenceChange('commentaires', e.target.value);
            }}
            rows={4}
            placeholder="Indiquez vos préférences d'horaires, besoins spécifiques..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            {preferences.commentaires.length}/500 caractères
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 cursor-pointer"
        >
          <i className="ri-arrow-left-line mr-2"></i> Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold cursor-pointer"
        >
          Suivant <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}
