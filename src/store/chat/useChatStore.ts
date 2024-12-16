import { create } from 'zustand';
import type { ChatState } from './types';
import { createMessage } from '../../utils/message';
import { OpenAIService } from '../../services/openai';

export const useChatStore = create<ChatState>((set, get) => {
  const openai = OpenAIService.getInstance();

  return {
    conversations: [],
    currentConversation: null,
    isLoading: false,
    error: null,

    sendMessage: async (content: string) => {
      set({ isLoading: true, error: null });
      const currentConversation = get().currentConversation;
      if (!currentConversation) return;

      const userMessage = createMessage({ content, role: 'user' });
      const updatedMessages = [...currentConversation.messages, userMessage];

      // Mise à jour immédiate avec le message de l'utilisateur
      set((state) => ({
        conversations: state.conversations.map((conv) =>
          conv.id === currentConversation.id
            ? { ...conv, messages: updatedMessages }
            : conv
        ),
        currentConversation: {
          ...currentConversation,
          messages: updatedMessages,
        },
      }));

      try {
        const aiResponse = await openai.sendMessage(updatedMessages);
        const assistantMessage = createMessage({
          content: aiResponse,
          role: 'assistant',
        });

        const finalMessages = [...updatedMessages, assistantMessage];

        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === currentConversation.id
              ? { ...conv, messages: finalMessages }
              : conv
          ),
          currentConversation: {
            ...currentConversation,
            messages: finalMessages,
          },
          isLoading: false,
        }));
      } catch (error) {
        set({
          error: error instanceof Error ? error.message : 'Une erreur est survenue',
          isLoading: false,
        });
      }
    },

    createNewChat: () => {
      const newConversation = {
        id: Date.now().toString(),
        messages: [],
        title: 'Nouvelle conversation',
        createdAt: Date.now(),
      };
      set((state) => ({
        conversations: [newConversation, ...state.conversations],
        currentConversation: newConversation,
      }));
    },

    setCurrentConversation: (id) => {
      set((state) => ({
        currentConversation:
          state.conversations.find((conv) => conv.id === id) || null,
      }));
    },
  };
});