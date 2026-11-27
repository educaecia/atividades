/* Prova oral · Kids 7 · 2026/2 · Wider World 1 · Units 4–6 */
EXAMS.push({
  id: 'kids7-2026-2',
  turma: 'TUR-003',
  nome: 'Kids 7',
  semestre: '2026/2',
  titulo: 'Oral Exam',
  livro: 'Wider World 1 · Units 4–6',
  alunos: [
    ['ALU-0007', 'Nina'], ['ALU-0008', 'Ana Luisa'], ['ALU-0009', 'Maria Luisa'], ['ALU-0010', 'Lucas'], ['ALU-0011', 'Julia Gomes']
  ],
  intro: 'Today you are going to talk with your teacher about what you studied this semester. You will answer some questions, describe two photos, read a short text and listen to a conversation. Take your time. You can ask your teacher to repeat a question.',
  perguntas: [
    'What do you usually eat for breakfast?',
    'Tell me about your typical Monday.',
    'What sports do you play or watch? Which one is your favorite?',
    'Who is your favorite athlete? What sport does he/she play? Why do you like him/her?',
    'Where were you last Saturday? Who were you with?',
    'Tell me about the last game you watched or played. What happened?',
    'What did you do last weekend? Tell me three things.',
    'How many years are there in a decade? And in a century?',
    "Tell me about your mother's or father's life. When was he/she born? Where did he/she study?",
    "Tell me three things people didn't do 30 years ago.",
    '"Cell phones are useless." Do you agree or disagree? Why?',
    'What is the most important technology in your opinion? Why?',
    'Ask me two questions about my last vacation.',
    "What type of music do you like? What type don't you like?",
    'Tell me three musical instruments. Which one is the most difficult to play, in your opinion?',
    'Compare two singers or bands you know.',
    'Where does a band usually play? What do we call the people who watch the concert?',
    'I want to go to a live concert this weekend. Make me a suggestion.'
  ],
  picture: {
    backstory: "This is Times Square in New York. A long time ago, when Sam's grandpa was young, he visited Times Square and took the photo on the left. Last year, Sam visited the same place and took the photo on the right. Look at the two photos and tell us: What was Times Square like in the past? What is it like now? What is different?",
    imgs: ['img/k7-times-square-1.jpg']
  },
  reading: {
    titulo: "What's a Film Without Popcorn?",
    texto: [
      'Popcorn was always connected with films. But when did this connection start?',
      'Popcorn became a popular snack in North America in the 19th century. People bought popcorn at circuses and fairs. Popcorn smelled so good that many people liked it.',
      "In the 1930s, going to the cinema became very popular, but the cinema owners didn't sell popcorn inside, because they wanted to protect their expensive carpets. Salesmen sold popcorn on the streets, and people loved it! A lot of people ate popcorn when they went to the cinema, so the owners saw that it was a good idea to sell it inside. At the beginning, the salesmen sold popcorn inside, but then the owners began to sell it themselves, and they made a lot of money from it, because popcorn was cheap and quick to make! Almost everybody ate popcorn!",
      "In the 2000s, many people started to watch movies at home on the internet, and some people stopped going to the cinema. But the popcorn industry didn't stop growing.",
      'Nowadays, people still buy popcorn at the movies. Or they make it at home and watch series or films on internet platforms, such as Netflix. Do you eat popcorn when you go to the cinema? Or do you make it at home?'
    ],
    perguntas: [
      ['Where and when did popcorn become a popular snack?', 'In North America, in the 19th century.'],
      ["Why didn't the cinema owners sell popcorn inside the cinemas at first?", 'Because they wanted to protect their expensive carpets.'],
      ['Who sold popcorn on the streets?', 'Salesmen.'],
      ['Why did the cinema owners make a lot of money from popcorn?', 'Because popcorn was cheap and quick to make (and almost everybody ate it).'],
      ['What did many people start to do in the 2000s?', 'They started to watch movies at home on the internet (some stopped going to the cinema).']
    ]
  },
  listening: {
    tipo: 'Listening',
    audio: true,
    titulo: 'Mia and Jason: music',
    fonte: 'english-practice.net · A2 Listening · Music and musical instruments · Exercise 1',
    video: 'https://drive.google.com/file/d/1yI8ymOsQNcSim_vOey6m1ts6S7gIe3vq/view',
    instrucao: 'Listen to Mia and Jason talking about music. Choose the correct answer.',
    itens: [
      { q: 'What does Mia think of the new album?', op: ["It's boring.", "It's fantastic.", "It's too loud."], c: 1 },
      { q: 'Which types of music does Mia love?', op: ['rap and jazz', 'rock and hip-hop', 'opera and classical music'], c: 0 },
      { q: 'Who listens to jazz with Mia at home?', op: ['her grandparents', 'her friends from school', 'her parents and her older brother'], c: 2 },
      { q: 'What does Jason think about opera?', op: ["It's his favorite type of music.", "He doesn't like listening to it.", 'He listens to it all the time.'], c: 1 },
      { q: "Jason's sister plays the violin …", op: ['at school.', 'only at home.', 'in an orchestra and in a band.'], c: 2 },
      { q: "Why doesn't Jason play the violin?", op: ["Because it's very difficult.", "Because it's too loud.", "Because he doesn't have one."], c: 0 },
      { q: "What is Mia's favorite instrument?", op: ['the piano', 'the saxophone', 'the electric guitar'], c: 1 },
      { q: 'Why does Mia hate the drums?', op: ["They're boring.", "They're expensive.", "They're too loud."], c: 2 }
    ]
  }
});
