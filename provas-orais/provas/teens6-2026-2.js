/* Prova oral · Teens 6 · 2026/2 · Wider World 3 · Welcome–Unit 2 */
EXAMS.push({
  id: 'teens6-2026-2',
  turma: 'TUR-007 + TUR-008',
  nome: 'Teens 6',
  semestre: '2026/2',
  titulo: 'Oral Exam',
  livro: 'Wider World 3 · Welcome–Unit 2',
  alunos: [['ALU-0030', 'Maria Eduarda'], ['ALU-0031', 'Letícia']],
  intro: 'Today you are going to talk with your teacher about what you studied this semester. You will answer some questions, describe some photos, read a text and listen to a conversation. Take your time. You can ask your teacher to repeat a question.',
  perguntas: [
    'Which country would you like to visit? What language do people speak there? Do you speak any other languages?',
    'How often do you use technology in your daily life, and what devices do you use most frequently?',
    "What is your opinion on social media? Do you believe it has more positive or negative effects on people's lives?",
    'What are you doing this weekend? Can you suggest some fun activities for me to try?',
    'When you have free time, do you prefer reading books or watching movies? What about trying a new hobby like painting?',
    'How do you keep a healthy lifestyle? Are there any habits or activities that you do regularly?',
    'Have you ever tried a food that you had never had before? If yes, what was it, and did you like it?',
    'What is the most interesting or exotic dish you have tried so far? When did you try it, and where?',
    'Do you usually prefer sweet or savory foods? Why?',
    'Do you know how to cook? How long have you known how to cook, and which dish have you made the most?',
    'Describe a typical meal that you eat regularly. What does it usually include? How does it taste?',
    'Tell me about a movie you have seen recently. Did you like it? Why or why not?',
    'Imagine we are in a café. Order something to eat and something to drink.'
  ],
  picture: {
    backstory: 'This is Lucas. He loves food, so he has just started a food blog. This week, he has tried a lot of different foods and drinks, and he has taken a lot of photos, some of them in the kitchen while he was cooking. Look at his photos and tell us: What has he tried? How do the foods and drinks look and taste? What is happening in the close-up photos?',
    imgs: ['img/t6-blog-1.jpg', 'img/t6-blog-2.jpg', 'img/t6-blog-3.jpg', 'img/t6-blog-4.jpg', 'img/t6-blog-5.jpg', 'img/t6-blog-6.jpg']
  },
  reading: {
    titulo: 'The unhealthiest places in the world',
    texto: [
      "According to a study by Clinic Compare, the unhealthiest country in the world is the Czech Republic. The study, which compared data on alcohol, tobacco consumption and obesity in 179 countries, found that Czech Republic residents are among the world's heaviest drinkers. Indeed, nine of the ten unhealthiest countries are located in Eastern Europe, where smoking is more common than in the rest of the world and is increasing among teenagers. The only one outside this region was the USA, where 36 percent of the population are obese. Obesity levels are lower in the Czech Republic but are the highest in Europe.",
      "The study must be taken with a pinch of salt, however. According to the rankings, the healthiest country in the world is Afghanistan due to its low obesity and alcohol consumption. In second and third place are Guinea and Niger. But that doesn't make them healthy places to live. Indeed, four countries listed among Clinic Compare's top ten healthiest countries, Guinea, DR Congo, Malawi and Mozambique, were among the least healthy nations in another study, the Global Competitiveness Index.",
      'High consumption of alcohol, tobacco and food are diseases of affluence; that is, they are common in wealthy countries. However, many countries, especially in Africa, are still struggling with diseases of poverty. For example, the average life expectancy in DR Congo is just 53 years old. Here, many people die from diseases which could be treated in other countries. In Malawi, tuberculosis and HIV are common. These countries lack basic medical facilities and trained doctors. In Mozambique, where 30% of people cannot access health services, lack of nutrients in the diet is a far more common medical problem than overeating.',
      'Moreover, Nepal, listed by Clinic Compare as the fourth healthiest country, is the tenth most polluted country and Afghanistan the fourteenth. Air pollution is a killer, with 7 million people dying worldwide each year from diseases associated with it. It is not just vehicle fumes and industries which are the problem. Around 2.4 billion people worldwide are exposed to dangerous levels of household air pollution while cooking on fires or stoves fueled by kerosene, wood, dung and coal.',
      'According to a different study, which measured factors such as the cost of staying healthy, life expectancy, air pollution, obesity, sunlight hours and crime rate, the healthiest country is Spain. This is most likely due to its traditionally healthy diet, clean air, the number of people walking to work (37%), and free healthcare. Interestingly, another study, the Global Health Security Index, ranks the USA as the healthiest nation. This was because its high standards in research, safety and communication allow it to detect and respond to pandemics the most effectively. This contrasts with the Clinic Compare survey, which ranked it the tenth unhealthiest country, primarily because of its high obesity rate.',
      "The countries with the highest levels of obesity, however, are in the Pacific islands. In countries such as Nauru, Tuvalu and Palau, over half the population is obese. This is a relatively new trend, as, before the 1950s, locals consumed a traditional diet that included bananas, coconuts, yams and seafood. Since then, incomes have increased, making imported convenience foods more affordable. This new scenario causes people to make poor food choices despite the availability of healthier, locally-grown options. In many regions of the USA, healthy choices just aren't available, or they are too expensive. In addition, this country's driving culture means that many people don't get enough exercise."
    ],
    perguntas: [
      ['According to the Clinic Compare study, which country is the unhealthiest in the world?', 'The Czech Republic.'],
      ['Why are Eastern European countries ranked among the unhealthiest?', 'Because of high alcohol and tobacco consumption: smoking is more common there than in the rest of the world (and increasing among teenagers), and people drink a lot.'],
      ['Why is the USA among the ten unhealthiest countries in the Clinic Compare study?', 'Because of its high obesity rate (36% of the population are obese).'],
      ['Why are diseases of poverty common in countries like DR Congo and Malawi?', 'Because they lack basic medical facilities and trained doctors, so people die from diseases that could be treated in other countries.'],
      ['Why are obesity levels so high in the Pacific islands today?', 'Incomes have increased and imported convenience foods became more affordable, so people make poor food choices instead of eating their traditional diet.']
    ]
  },
  listening: {
    tipo: 'Listening',
    audio: true,
    titulo: 'Changing plans',
    fonte: 'British Council · LearnEnglish · A2 Listening · Changing plans',
    video: 'https://drive.google.com/file/d/1pOVwKJ_-aHTIEcHhR5IpkB0iAPGyU7x4/view',
    instrucao: 'Listen to Sachi and Francesco talking about their plans. Choose the correct answer.',
    itens: [
      { q: 'What was Sachi going to do this afternoon?', op: ['buy tickets for a play', 'go to band practice', 'watch a Marvel movie'], c: 0 },
      { q: "Why can't Francesco go to the theater on Friday?", op: ['He has to work.', 'He has a concert.', "He's going to a birthday party."], c: 1 },
      { q: 'What does Francesco suggest first?', op: ['going to the cinema instead', 'inviting his band', 'going to the play next week'], c: 2 },
      { q: 'What happened two weeks ago?', op: ['Sachi lost the cinema tickets.', 'Francesco changed their plans for band practice.', 'They watched a Marvel movie together.'], c: 1 },
      { q: 'What do they decide in the end?', op: ['They will have dinner before the concert and see the play next Friday.', 'Sachi will go to the play alone.', 'They will see the play this Friday.'], c: 0 },
      { q: "Complete Francesco's words with the words in the box.", bank: ["Why don't we", 'free', 'How about', 'time'],
        gaps: ['“{} next week?”', '“Are you {} then?”', '“{} go out for dinner before my concert?”', '“Come on, Sachi. Just this one more {}.”'],
        ans: ['How about', 'free', "Why don't we", 'time'] },
      { q: 'Do you think Sachi is right to be upset with Francesco? Why or why not?', oral: true },
      { q: "Your friend can't go to the movies with you on Saturday. Suggest two other plans.", oral: true }
    ]
  }
});
