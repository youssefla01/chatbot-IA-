import type { ChatState } from './types';

export const selectCurrentConversation = (state: ChatState) => state.currentConversation;
export const selectIsLoading = (state: ChatState) => state.isLoading;
export const selectConversations = (state: ChatState) => state.conversations;