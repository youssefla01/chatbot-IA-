import type { Conversation, Message } from '../../types';

export interface ChatState {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  createNewChat: () => void;
  setCurrentConversation: (id: string) => void;
}