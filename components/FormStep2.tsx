'use client';

import { useState } from 'react';

interface FormStep2Props {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FormStep2({ data, updateData, onNext, onPrev }: FormStep2Props) {
  const [formData, setFormData] = useState({
    nom: data.personalInfo?.nom || '',
    prenom: data.personalInfo?.prenom || '',
    dateNaissance: data.personalInfo?.dateNaissance || '',
    lieuNaissance: data.personalInfo?.lieuNaissance || '',
    nationalite: data.personalInfo?.nationalite || 'Française',
    adresse: data.personalInfo?.adresse || '',
    codePostal: data.personalInfo?.codePostal || '',
    ville: data.personalInfo?.ville || '',
    telephone: data.personalInfo?.telephone || '',
    email: data.personalInfo?.email || ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const nationalites = [
    'Française', 'Belge', 'Suisse', 'Canadienne', 'Allemande', 'Italienne',
    'Espagnole', 'Portugaise', 'Britannique', 'Américaine', 'Autre'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.dateNaissance) newErrors.dateNaissance = 'La date de naissance est requise';
    if (!formData.lieuNaissance.trim()) newErrors.lieuNaissance = 'Le lieu de naissance est requis';
    if (!formData.adresse.trim()) newErrors.adresse = 'L\'adresse est requise';
    if (!formData.codePostal.trim()) newErrors.codePostal = 'Le code postal est requis';
    if (!formData.ville.trim()) newErrors.ville = 'La ville est requise';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      // Envoi de toutes les clés explicitement
      updateData({
        personalInfo: {
          nom: formData.nom,
          prenom: formData.prenom,
          dateNaissance: formData.dateNaissance,
          lieuNaissance: formData.lieuNaissance,
          nationalite: formData.nationalite,
          adresse: formData.adresse,
          codePostal: formData.codePostal,
          ville: formData.ville,
          telephone: formData.telephone,
          email: formData.email
        }
      });
      onNext();
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Informations Personnelles
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Remplissez vos informations personnelles avec précision
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Nom */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
          <input
            type="text"
            value={formData.nom}
            onChange={(e) => handleInputChange('nom', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.nom ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Votre nom de famille"
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
        </div>

        {/* Prénom */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
          <input
            type="text"
            value={formData.prenom}
            onChange={(e) => handleInputChange('prenom', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.prenom ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Votre prénom"
          />
          {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
        </div>

        {/* Date de Naissance */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Date de Naissance *</label>
          <input
            type="date"
            value={formData.dateNaissance}
            onChange={(e) => handleInputChange('dateNaissance', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.dateNaissance ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.dateNaissance && <p className="text-red-500 text-xs mt-1">{errors.dateNaissance}</p>}
        </div>

        {/* Lieu de Naissance */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Lieu de Naissance *</label>
          <input
            type="text"
            value={formData.lieuNaissance}
            onChange={(e) => handleInputChange('lieuNaissance', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.lieuNaissance ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ville de naissance"
          />
          {errors.lieuNaissance && <p className="text-red-500 text-xs mt-1">{errors.lieuNaissance}</p>}
        </div>

        {/* Nationalité */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Nationalité *</label>
          <select
            value={formData.nationalite}
            onChange={(e) => handleInputChange('nationalite', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            {nationalites.map((nat) => <option key={nat} value={nat}>{nat}</option>)}
          </select>
        </div>

        {/* Adresse */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse *</label>
          <input
            type="text"
            value={formData.adresse}
            onChange={(e) => handleInputChange('adresse', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.adresse ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Numéro et nom de rue"
          />
          {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse}</p>}
        </div>

        {/* Code Postal */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Code Postal *</label>
          <input
            type="text"
            value={formData.codePostal}
            onChange={(e) => handleInputChange('codePostal', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.codePostal ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Code postal"
          />
          {errors.codePostal && <p className="text-red-500 text-xs mt-1">{errors.codePostal}</p>}
        </div>

        {/* Ville */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Ville *</label>
          <input
            type="text"
            value={formData.ville}
            onChange={(e) => handleInputChange('ville', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.ville ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Ville"
          />
          {errors.ville && <p className="text-red-500 text-xs mt-1">{errors.ville}</p>}
        </div>

        {/* Téléphone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
          <input
            type="tel"
            value={formData.telephone}
            onChange={(e) => handleInputChange('telephone', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.telephone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="06 12 34 56 78"
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="votre.email@exemple.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
        >
          <i className="ri-arrow-left-line mr-2"></i> Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
        >
          Continuer <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
}
