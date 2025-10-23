'use client';

import { useState } from 'react';

interface FormStep3Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FormStep3({ data, updateData, onNext, onPrev }: FormStep3Props) {
  const [documents, setDocuments] = useState({
    idCard: data.documents?.idCard || null,
    proofOfAddress: data.documents?.proofOfAddress || null,
    photo: data.documents?.photo || null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const newDocs = { ...documents, [name]: files[0] };
      setDocuments(newDocs);
      updateData({ documents: newDocs });
    }
  };

  const handleNext = () => {
    if (!documents.idCard || !documents.proofOfAddress) {
      alert('Merci de fournir au minimum votre carte d’identité et un justificatif de domicile.');
      return;
    }
    onNext();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Téléversez vos Documents
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Fournissez les pièces justificatives nécessaires à votre inscription.
      </p>

      <div className="space-y-6">
        {/* Carte d’identité */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <label className="block font-semibold text-gray-800 mb-2">
            Carte d'identité (recto/verso) <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="idCard"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
          />
          {documents.idCard && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Fichier sélectionné : {documents.idCard.name}
            </p>
          )}
        </div>

        {/* Justificatif de domicile */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <label className="block font-semibold text-gray-800 mb-2">
            Justificatif de domicile <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="proofOfAddress"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
          />
          {documents.proofOfAddress && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Fichier sélectionné : {documents.proofOfAddress.name}
            </p>
          )}
        </div>

        {/* Photo d’identité (optionnelle) */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <label className="block font-semibold text-gray-800 mb-2">
            Photo d'identité (optionnelle)
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none p-2"
          />
          {documents.photo && (
            <p className="text-green-600 text-sm mt-2">
              ✅ Fichier sélectionné : {documents.photo.name}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onPrev}
          className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-arrow-left-line mr-2"></i> Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold whitespace-nowrap cursor-pointer"
        >
          Suivant <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}
