import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export const ProfileSettings: React.FC = () => {
  const { user, updateProfile } = useAuthStore();
  const [name, setName] = useState(user?.name || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({ name, avatar });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold">Paramètres du Profil</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-1.5 shadow-lg">
                <Camera className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <label htmlFor="avatar" className="block text-sm font-medium mb-1">
                URL de la Photo de Profil
              </label>
              <input
                id="avatar"
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="w-full p-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
                placeholder="https://example.com/avatar.jpg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom d'affichage
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Adresse Email
            </label>
            <input
              type="email"
              value={user?.email}
              disabled
              className="w-full p-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              L'adresse email ne peut pas être modifiée
            </p>
          </div>

          {success && (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-3 rounded-lg">
              Profil mis à jour avec succès !
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};