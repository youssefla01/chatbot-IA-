import type { Conversation } from '../types';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    title: 'Web Development Tips',
    createdAt: Date.now() - 86400000 * 2, // 2 days ago
    messages: [
      {
        id: '1',
        content: 'What are the best practices for React performance optimization?',
        role: 'user',
        timestamp: Date.now() - 86400000 * 2,
      },
      {
        id: '2',
        content: 'Here are some key React performance optimization techniques:\n\n1. Use React.memo() for component memoization\n2. Implement useMemo() for expensive calculations\n3. Utilize useCallback() for function memoization\n4. Avoid unnecessary re-renders\n5. Code-splitting with React.lazy()\n6. Virtual scrolling for long lists',
        role: 'assistant',
        timestamp: Date.now() - 86400000 * 2 + 1000,
      },
    ],
  },
  {
    id: '2',
    title: 'AI and Machine Learning',
    createdAt: Date.now() - 86400000, // 1 day ago
    messages: [
      {
        id: '3',
        content: 'Can you explain the difference between supervised and unsupervised learning?',
        role: 'user',
        timestamp: Date.now() - 86400000,
      },
      {
        id: '4',
        content: 'Supervised learning uses labeled data where the desired output is known, while unsupervised learning works with unlabeled data to find patterns and relationships. Examples:\n\nSupervised Learning:\n- Classification\n- Regression\n\nUnsupervised Learning:\n- Clustering\n- Dimensionality reduction',
        role: 'assistant',
        timestamp: Date.now() - 86400000 + 1000,
      },
    ],
  },
  {
    id: '3',
    title: 'Travel Planning',
    createdAt: Date.now() - 43200000, // 12 hours ago
    messages: [
      {
        id: '5',
        content: 'What are some must-visit places in Japan?',
        role: 'user',
        timestamp: Date.now() - 43200000,
      },
      {
        id: '6',
        content: 'Here are some essential places to visit in Japan:\n\n1. Tokyo:\n- Shibuya Crossing\n- Senso-ji Temple\n- Tokyo Skytree\n\n2. Kyoto:\n- Fushimi Inari Shrine\n- Kinkaku-ji (Golden Pavilion)\n- Arashiyama Bamboo Grove\n\n3. Osaka:\n- Osaka Castle\n- Dotonbori\n- Universal Studios Japan',
        role: 'assistant',
        timestamp: Date.now() - 43200000 + 1000,
      },
    ],
  },
  {
    id: '4',
    title: 'Cooking Tips',
    createdAt: Date.now() - 7200000, // 2 hours ago
    messages: [
      {
        id: '7',
        content: 'How do I make the perfect pasta?',
        role: 'user',
        timestamp: Date.now() - 7200000,
      },
      {
        id: '8',
        content: 'Here\'s a guide to making perfect pasta:\n\n1. Use plenty of water (1 liter per 100g pasta)\n2. Add salt (1-2 tablespoons per liter)\n3. Bring water to a rolling boil\n4. Cook until al dente (check package instructions)\n5. Reserve some pasta water\n6. Drain but don\'t rinse\n7. Immediately toss with sauce\n\nPro tip: The pasta water helps create a silky sauce!',
        role: 'assistant',
        timestamp: Date.now() - 7200000 + 1000,
      },
    ],
  },
  {
    id: '5',
    title: 'Fitness Advice',
    createdAt: Date.now() - 3600000, // 1 hour ago
    messages: [
      {
        id: '9',
        content: 'What\'s the best way to start a fitness routine?',
        role: 'user',
        timestamp: Date.now() - 3600000,
      },
      {
        id: '10',
        content: 'Here\'s a beginner-friendly approach to starting a fitness routine:\n\n1. Start Small:\n- 15-30 minutes per day\n- 3-4 days per week\n\n2. Mix of Activities:\n- Cardio (walking, cycling)\n- Basic strength training\n- Stretching\n\n3. Progressive Overload:\n- Gradually increase intensity\n- Add more exercises\n\n4. Stay Consistent:\n- Set realistic goals\n- Track progress\n- Listen to your body',
        role: 'assistant',
        timestamp: Date.now() - 3600000 + 1000,
      },
    ],
  },
];