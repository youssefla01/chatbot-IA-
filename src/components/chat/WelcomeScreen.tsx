import React from 'react';
import { Bot, MessageSquare, Zap, Shield } from 'lucide-react';

export const WelcomeScreen: React.FC = () => (
  <div className="flex-1 flex items-center justify-center p-8">
    <div className="max-w-2xl w-full text-center space-y-8">
      <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto">
        <Bot className="w-8 h-8 text-white" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Bienvenue sur ChatGPT Clone</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Votre assistant de conversation propulsé par l'IA
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border dark:border-gray-700">
          <MessageSquare className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Conversations Naturelles</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Engagez des discussions fluides et contextuelles sur n'importe quel sujet
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border dark:border-gray-700">
          <Zap className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Réponses Instantanées</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Obtenez des réponses immédiates et réfléchies à vos questions
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border dark:border-gray-700">
          <Shield className="w-8 h-8 text-blue-600 mb-4" />
          <h3 className="font-semibold mb-2">Sécurisé & Privé</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Vos conversations sont protégées et confidentielles
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Commencez une nouvelle conversation ou sélectionnez une conversation existante
      </p>
    </div>
  </div>
);