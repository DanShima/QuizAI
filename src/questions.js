//it's important to vary the order of the values, which are used for the neural network
export const trainingQuestions = [
    {
      id: 'q1',
      question: 'Your friend asks if they can choose an outfit for you to wear, one that is radically different from your own style.',
      options: [
        { id: 'q1d', label: 'No way!', value: 0.0 },
        { id: 'q1a', label: 'LOVE this plan!', value: 1.0 },
        { id: 'q1b', label: 'Grudgingly let them pick one, but refuse to wear it in public', value: 0.4 },
        { id: 'q1c', label: 'Reluctantly try the look out in public', value: 0.6 },
      ],
    },
    {
      id: 'q2',
      question: 'You discover that your favorite author is an outspoken misogynist.',
      options: [
        { id: 'q2a', label: 'Never read his books again', value: 0.0 },
        { id: 'q2b', label: 'Read his books one last time but will not look for new books', value: 0.2 },
        { id: 'q2d', label: 'do not mind and feel curious why he is like that', value: 0.8 },
        { id: 'q2c', label: 'feel upset but continue to read his books', value: 0.6 },
      ],
    },
    {
      id: 'q3',
      question: 'Your date has got some surprisingly racist beliefs.',
      options: [
        { id: 'q3a', label: 'understand and discover what else you have in common', value: 0.9 },
        { id: 'q3b', label: 'understand why and gently try to open his mind', value: 0.7 },
        { id: 'q3c', label: 'Get up and walk away', value: 0.1 },
        { id: 'q3d', label: 'Chew him/her out for being close-minded', value: 0.2 },
      ],
    },
    {
      id: 'q4',
      question: 'How do you feel about fiction(books/movie/series) with an uncertain ending, where you are left to imagine what happens next?',
      options: [
        { id: 'q4a', label: 'Meh', value: 0.3 },
        { id: 'q4b', label: 'That is great sometimes', value: 0.6 },
        { id: 'q4c', label: 'No thanks', value: 0.1 },
        { id: 'q4d', label: 'Yes! I would love to exercise my imagination!', value: 1.0 },
      ],
    },
    {
      id: 'q5',
      question: 'Would you be willing to try a strange new dish in a foreign country?',
      options: [
        { id: 'q5a', label: 'No weird food for me, weirdo.', value: 0.0 },
        { id: 'q5b', label: 'Sure, I will try anything', value: 1.0 },
        { id: 'q5c', label: 'only if reviews say it is tasty', value: 0.3 },
        { id: 'q5d', label: 'I might try some weird foods, but not all', value: 0.5 },
      ],
    },
    {
      id: 'q6',
      question: 'Finish this sentence: "It has been done this way for 500 years, and..."',
      options: [
        { id: 'q6d', label: 'probably for a good reason', value: 0.3 },
        { id: 'q6a', label: 'it will always be done this way', value: 0.0 },
        { id: 'q6c', label: 'it is probably about time for a change', value: 0.7 },
        { id: 'q6b', label: 'I am sure we could come up with a better way to do it', value: 1.0 },
      ],
    },
    {
      id: 'q7',
      question: 'Do you sometimes find yourself changing your mind about important social and political issues as you learn more about them?',
      options: [
        { id: 'q7a', label: 'Never', value: 0.0 },
        { id: 'q7b', label: 'Sure', value: 1.0 },
        { id: 'q7c', label: 'Depends, I can form a better understanding as I know more about a certain issue', value: 0.7 },
        { id: 'q7d', label: 'Sometimes', value: 0.5 },
      ],
    },
    {
      id: 'q8',
      question: 'I prefer to follow most rules and instructions.',
      options: [
        { id: 'q8a', label: 'Rules are made to be broken and instructions are just restrictions', value: 1.0 },
        { id: 'q8b', label: 'Absolutely', value: 0.0 },
        { id: 'q8c', label: 'I do not like to, but mostly have to', value: 0.7 },
        { id: 'q8d', label: 'Sometimes', value: 0.5 },
      ],
    },
  ];
  
  export const validationQuestions = [
    {
      id: 'vq1',
      question: 'Do you believe your nation could learn something from other parts of the world?',
      options: [
        { id: 'vq1a', label: 'Definitely not', value: 0.0 },
        { id: 'vq1b', label: 'I doubt that seriously', value: 0.2 },
        { id: 'vq1c', label: 'Perhaps in some areas', value: 0.6 },
        { id: 'vq1d', label: 'Sure, there is always room for improvement', value: 1.0 },
      ],
    },
    {
        id: 'vq2',
        question: 'Comfort is often more important to me than trying something new.',
        options: [
          { id: 'vq2a', label: 'Strongly agree', value: 0.0 },
          { id: 'vq2b', label: 'Agree', value: 0.7 },
          { id: 'vq2c', label: 'Neutral', value: 0.5 },
          { id: 'vq2d', label: 'Disagree', value: 1.0 },
        ],
    },
  ];