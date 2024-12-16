import { create } from 'zustand';
import type { Conversation, Message } from '../types';

interface ChatState {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  createNewChat: () => void;
  setCurrentConversation: (id: string) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  conversations: [],
  currentConversation: null,
  isLoading: false,
  sendMessage: async (content) => {
    set({ isLoading: true });
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: Date.now(),
    };

    const currentConversation = get().currentConversation;
    if (!currentConversation) return;

    // Simulate API response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: 'This is a simulated response from the AI.',
        role: 'assistant',
        timestamp: Date.now(),
      };

      const updatedConversation = {
        ...currentConversation,
        messages: [...currentConversation.messages, newMessage, response],
      };

      set((state) => ({
        conversations: state.conversations.map((conv) =>
          conv.id === currentConversation.id ? updatedConversation : conv
        ),
        currentConversation: updatedConversation,
        isLoading: false,
      }));
    }, 1000);
  },
  createNewChat: () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      messages: [],
      title: 'New Chat',
      createdAt: Date.now(),
    };
    set((state) => ({
      conversations: [newConversation, ...state.conversations],
      currentConversation: newConversation,
    }));
  },
  setCurrentConversation: (id) => {
    set((state) => ({
      currentConversation: state.conversations.find((conv) => conv.id === id) || null,
    }));
  },
}));