// Configuration des variables d'environnement
export const env = {
  OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY,
  OPENAI_MODEL: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
  MAX_TOKENS: parseInt(import.meta.env.VITE_MAX_TOKENS || '2000', 10),
  OPENAI_ORG: import.meta.env.VITE_OPENAI_ORG,
};