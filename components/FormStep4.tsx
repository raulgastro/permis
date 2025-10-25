'use client';

import { useState } from 'react';

interface FormStep4Props {
  data: any;
  onPrev: () => void;
}

export default function FormStep4({ data, onPrev }: FormStep4Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [acceptConditions, setAcceptConditions] = useState(false);

  // Log des données reçues
  console.log('Données reçues dans FormStep4 :', data);

  const handleSubmit = async () => {
    if (!acceptConditions) {
      alert('Veuillez accepter les conditions générales');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Données textuelles
      console.log("Ajout des données textuelles au FormData...");
      formDataToSend.append("permisType", data.permisType);
      formDataToSend.append("personalInfo", JSON.stringify(data.personalInfo));
      formDataToSend.append("preferences", JSON.stringify(data.preferences));

      // Fichiers
      if (data.documents) {
        Object.keys(data.documents).forEach((key) => {
          const files = data.documents[key];
          if (files && Array.isArray(files)) {
            files.forEach((file: File) => {
              if (file) {
                formDataToSend.append(key, file);
              }
            });
          }
        });
      }

      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Envoi au serveur
      const response = await fetch("/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      console.log("Réponse de l'API :", result); // Log réponse de l'API

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("Erreur lors de l'envoi : " + (result.error || "Inconnue"));
      }
    } catch (error) {
      console.error("Erreur réseau lors de l'envoi :", error);
      alert("Erreur réseau. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPermisTypeLabel = (type: string) => {
    const types: { [key: string]: string } = {
      'B': 'Permis B - Véhicules légers',
      'A': 'Permis A - Motocycles',
      'A2': 'Permis A2 - Motocycles 35kW',
      'C': 'Permis C - Poids lourds',
      'D': 'Permis D - Transport voyageurs',
      'AM': 'Permis AM - Cyclomoteurs'
    };
    return types[type] || type;
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
          <i className="ri-check-line text-3xl text-green-600"></i>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Demande Envoyée !
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Votre demande de permis de conduire a été envoyée avec succès.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h4 className="font-semibold text-blue-900 mb-2">
            Prochaines Étapes :
          </h4>
          <ul className="text-left text-blue-800 space-y-2">
            <li className="flex items-start">
              <i className="ri-number-1 text-blue-600 mr-2 mt-1"></i>
              Vous recevrez un email de confirmation dans les 24h
            </li>
            <li className="flex items-start">
              <i className="ri-number-2 text-blue-600 mr-2 mt-1"></i>
              Un conseiller vous contactera sous 48h
            </li>
            <li className="flex items-start">
              <i className="ri-number-3 text-blue-600 mr-2 mt-1"></i>
              Préparez vos documents pour l'inscription
            </li>
          </ul>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold whitespace-nowrap cursor-pointer"
        >
          Nouvelle Demande
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Confirmation de Votre Demande
      </h3>
      <p className="text-gray-600 mb-8 text-center">
        Vérifiez vos informations avant de finaliser votre demande
      </p>

      {/* Type de permis */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <i className="ri-car-line mr-2 text-blue-600"></i>
          Type de Permis
        </h4>
        <p className="text-gray-700 font-medium">
          {getPermisTypeLabel(data.permisType)}
        </p>
      </div>

      {/* Informations personnelles */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
          <i className="ri-user-line mr-2 text-blue-600"></i>
          Informations Personnelles
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {data.personalInfo &&
            Object.entries(data.personalInfo).map(([key, value]) => (
              <div key={key}>
                <span className="text-gray-500">
                  {key.charAt(0).toUpperCase() + key.slice(1)} :
                </span>
                <span className="ml-2 font-medium">{String(value ?? '')}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Préférences */}
      {data.preferences?.autoEcole || data.preferences?.modeFormation || data.preferences?.commentaires ? (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <i className="ri-settings-line mr-2 text-blue-600"></i>
            Préférences
          </h4>
          <div className="space-y-2 text-sm">
            {data.preferences?.autoEcole && (
              <div>
                <span className="text-gray-500">Auto-école :</span>
                <span className="ml-2 font-medium">{data.preferences.autoEcole}</span>
              </div>
            )}
            {data.preferences?.modeFormation && (
              <div>
                <span className="text-gray-500">Mode de formation :</span>
                <span className="ml-2 font-medium">
                  {data.preferences.modeFormation === 'traditionnelle'
                    ? 'Traditionnelle'
                    : data.preferences.modeFormation === 'acceleree'
                    ? 'Accélérée'
                    : 'Conduite accompagnée'}
                </span>
              </div>
            )}
            {data.preferences?.commentaires && (
              <div>
                <span className="text-gray-500">Commentaires :</span>
                <p className="mt-1 text-gray-700">{data.preferences.commentaires}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}

      {/* Documents */}
      {data.documents && Object.keys(data.documents).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <i className="ri-file-line mr-2 text-blue-600"></i>
            Documents
          </h4>
          <ul className="text-sm space-y-2">
            {Object.keys(data.documents).map((key) => {
              const files = data.documents[key];
              if (!files || !Array.isArray(files)) return null;

              return files.map((file: File, index: number) => {
                if (!file?.name) return null;

                const ext = (file.name.split('.').pop() || '').toLowerCase();
                let iconClass = 'ri-file-line';
                if (ext === 'pdf') iconClass = 'ri-file-pdf-line text-red-600';
                else if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) iconClass = 'ri-image-line text-green-600';
                else if (['doc', 'docx'].includes(ext)) iconClass = 'ri-file-word-line text-blue-600';
                else if (['xls', 'xlsx'].includes(ext)) iconClass = 'ri-file-excel-line text-green-700';

                return (
                  <li key={`${key}-${index}`} className="flex items-center space-x-2">
                    <i className={`${iconClass} text-lg`}></i>
                    <span className="text-gray-500">{key} :</span>
                    <span className="font-medium">{file.name}</span>
                  </li>
                );
              });
            })}
          </ul>
        </div>
      )}

      {/* Conditions */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={acceptConditions}
            onChange={(e) => setAcceptConditions(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
          />
          <div className="ml-3">
            <span className="text-sm text-gray-700">
              J'accepte les{' '}
              <a href="#" className="text-blue-600 hover:underline cursor-pointer">
                conditions générales d'utilisation
              </a>{' '}
              et la{' '}
              <a href="#" className="text-blue-600 hover:underline cursor-pointer">
                politique de confidentialité
              </a>
              . Je confirme que les informations fournies sont exactes et complètes.
            </span>
          </div>
        </label>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPrev}
          disabled={isSubmitting}
          className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 whitespace-nowrap cursor-pointer disabled:opacity-50"
        >
          <i className="ri-arrow-left-line mr-2"></i>
          Précédent
        </button>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || !acceptConditions}
          className={`px-8 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors flex items-center ${
            isSubmitting || !acceptConditions
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
          }`}
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Envoi en cours...
            </>
          ) : (
            <>
              <i className="ri-send-plane-line mr-2"></i>
              Envoyer la Demande
            </>
          )}
        </button>
      </div>
    </div>
  );
}
