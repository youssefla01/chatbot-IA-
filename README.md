# ChatGPT Clone

Une application de chat moderne et responsive utilisant React, TypeScript et l'API OpenAI.

## 🌟 Fonctionnalités

### Authentification
- 🔐 Système de connexion et d'inscription
- 👤 Gestion des profils utilisateurs
- 🔄 Persistance de session

### Chat
- 💬 Interface conversationnelle avec ChatGPT
- 📝 Support du Markdown dans les messages
- ⚡ Réponses en temps réel
- 📱 Interface responsive (mobile, tablette, desktop)

### Administration
- 👥 Gestion des utilisateurs
- 🔍 Filtrage et recherche
- 📊 Statistiques et monitoring
- 🎚️ Contrôle des statuts utilisateurs

### Interface
- 🌓 Mode sombre/clair
- 🎨 Design moderne avec Tailwind CSS
- 📱 Navigation mobile optimisée
- 🔄 Transitions et animations fluides

## 🚀 Installation

1. Clonez le repository
```bash
git clone <repository-url>
cd chatgpt-clone
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos propres valeurs :
```env
VITE_OPENAI_API_KEY=votre-clé-api
VITE_OPENAI_MODEL=gpt-3.5-turbo
VITE_MAX_TOKENS=2000
```

4. Lancez l'application en mode développement
```bash
npm run dev
```

## 🔑 Comptes de démonstration

### Compte Administrateur
- Email: admin@example.com
- Mot de passe: password123

### Compte Utilisateur
- Email: john@example.com
- Mot de passe: password123

## 🛠️ Technologies utilisées

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Zustand (gestion d'état)
  - React Router v6
  - Lucide React (icônes)

- **API**
  - OpenAI GPT-3.5/4
  - API REST

- **Outils de développement**
  - Vite
  - ESLint
  - PostCSS
  - Autoprefixer

## 📱 Responsive Design

L'application est entièrement responsive avec des points de rupture pour :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🔒 Sécurité

- Authentification sécurisée
- Protection des routes
- Validation des entrées utilisateur
- Gestion des rôles (admin/user)

## 🎨 Thèmes

L'application supporte deux thèmes :
- Mode clair (par défaut)
- Mode sombre (détection automatique des préférences système)

## 📝 Structure du projet

```
src/
├── components/        # Composants React
│   ├── admin/        # Interface d'administration
│   ├── auth/         # Composants d'authentification
│   ├── chat/         # Interface de chat
│   ├── layout/       # Layouts réutilisables
│   └── sidebar/      # Navigation latérale
├── config/           # Configuration
├── hooks/            # Hooks personnalisés
├── pages/            # Pages de l'application
├── services/         # Services (API, etc.)
├── store/            # État global (Zustand)
├── types/            # Types TypeScript
└── utils/            # Utilitaires
```

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.