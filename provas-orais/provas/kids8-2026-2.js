/* Prova oral · Kids 8 · 2026/2 · Wider World 1 · Units 1–3 */
EXAMS.push({
  id: 'kids8-2026-2',
  turma: 'TUR-004',
  nome: 'Kids 8',
  semestre: '2026/2',
  titulo: 'Oral Exam',
  livro: 'Wider World 1 · Units 1–3',
  alunos: [
    ['ALU-0012', 'Isadora Maria'], ['ALU-0013', 'Arthur'], ['ALU-0014', 'Isadora Lana'], ['ALU-0015', 'Larissa'],
    ['ALU-0016', 'Livia Breguês'], ['ALU-0017', 'Miguel Breguês'], ['ALU-0018', 'Luisa'], ['ALU-0019', 'Fernanda']
  ],
  intro: 'Today you are going to talk with your teacher about what you studied this semester. You will answer some questions, describe some pictures, read a short text and watch a video. Take your time. You can ask your teacher to repeat a question.',
  perguntas: [
    'What country are you from?',
    "What is Messi's nationality?",
    'How many people are there in your family? Choose one person and describe his/her appearance.',
    "What can this person do? What can't he/she do?",
    'Tell me one personality adjective to describe this person. Explain why.',
    'Introduce your best friend. Describe his/her appearance and personality.',
    'What is a typical meal in your country? What is it made of? When do people usually eat it?',
    'Tell me about your eating habits. What do you usually eat for breakfast, lunch and dinner?',
    'Think about your fridge. What is there in it right now?',
    'Do you know how to cook? Tell me one recipe. What ingredients do you need?',
    'What is your favorite food? Why do you like it?',
    'Do you prefer eating at home or at a restaurant? Why?',
    'Tell me about your typical Monday.',
    'Does someone in your family have the same routine as you? What is different?',
    'What are you doing this afternoon?',
    "Imagine today is Saturday and you don't have any homework. What are you doing?",
    'What time do you usually wake up? What is the first thing you do?',
    'What do you usually do before going to bed?'
  ],
  picture: {
    backstory: 'This is the Parker family. Last summer, the whole family went on holiday together: Grandma and Grandpa, Mom and Dad, aunts, uncles and lots of cousins, from the baby to the teenagers. They spent five days together and took a lot of photos. This is their holiday photo album. Look at the pictures and tell us: what was the family doing?',
    imgs: ['img/k8-album-1.jpg', 'img/k8-album-2.jpg', 'img/k8-album-3.jpg', 'img/k8-album-4.jpg', 'img/k8-album-5.jpg', 'img/k8-album-6.jpg']
  },
  reading: {
    titulo: 'My Daily Routine',
    texto: [
      'Hello. My name is Tina, and today I want to tell you about my daily routine.',
      "I usually wake up at 6 o'clock, but I don't get up right away. I like staying in bed for an extra ten or fifteen minutes. When I finally get out of bed, I go to the bathroom, wash my face, get dressed, and brush my hair. Then, I go to the kitchen, have a glass of water, and prepare my breakfast. Usually, I have toast with peanut butter and a banana on the side. I know that many people drink coffee in the morning, but I don't because it gives me a headache. I prefer to have a cup of tea.",
      "I know that many people check their phones in the morning, but not me. I prefer to listen to gentle music and read a book. These days, I'm reading one called Atomic Habits. It's very interesting. I'm learning a lot from it.",
      "After I finish my breakfast, I wash the dishes and brush my teeth. Then, I'm ready to go to work! I'm a nurse at my local hospital. I work from 8 to 4. My job is difficult, but I like it because I like helping people.",
      'After work, I usually go home, but sometimes, I visit my parents. My mom is an excellent cook, and she still loves making dinner for me. My dad likes playing chess, so while my mom cooks, my dad and I usually play chess together. He usually wins, but sometimes, I beat him.',
      "After dinner—at home or at my parents' house—I like to relax on the couch. I usually watch TV for an hour, or I just text my friends on my phone. I know that many people are more active than me after work, but I am on my feet all day, so I like to take it easy in the evening. I usually take a shower around 7:30. Then, I put on my pajamas, brush my teeth one more time, and read in bed until I feel tired. I usually fall asleep around 9:30 or 10 p.m.",
      "And that's it! Thank you for reading about my day. What's your daily routine?"
    ],
    perguntas: [
      ["Why doesn't Tina get up immediately after she wakes up?", 'She likes staying in bed for an extra ten or fifteen minutes.'],
      ['What does Tina usually have for breakfast, and what does she drink?', 'Toast with peanut butter and a banana; a cup of tea (not coffee: it gives her a headache).'],
      ['What does Tina like to do instead of checking her phone in the morning?', 'She listens to gentle music and reads a book (Atomic Habits).'],
      ['Why does Tina enjoy her job as a nurse?', 'Because she likes helping people.'],
      ['What does Tina usually do before she goes to sleep?', 'She takes a shower, puts on her pajamas, brushes her teeth and reads in bed until she feels tired.']
    ]
  },
  listening: {
    tipo: 'Watching',
    titulo: 'A typical day?',
    fonte: 'Wider World 1 · BBC Culture 3 · pages 94–95',
    video: 'https://drive.google.com/file/d/1flbvgxKENC_kuJgA2ok_W4R_Akef2XBp/view', // link do YouTube, do Google Drive ou de um arquivo de vídeo/áudio
    instrucao: 'Watch the video. Choose the correct answer.',
    itens: [
      { q: 'Where are the children in the video from?', op: ['Brazil, Japan, the USA and Mexico', 'England, Japan, Wales and Papua New Guinea', 'England, China, Spain and Australia'], c: 1 },
      { q: 'In the morning, the children get up, wash their face, brush their teeth and …', op: ['have breakfast.', 'have dinner.', 'do sports.'], c: 0 },
      { q: 'How do the children go to school?', op: ['They all go by bus.', 'They all walk.', 'Some take the bus, some walk and some go by car.'], c: 2 },
      { q: 'The video says that school is …', op: ['easy everywhere.', 'hard work everywhere.', 'boring everywhere.'], c: 1 },
      { q: 'When can the students play with their friends at school?', op: ['in their classes', 'after dinner', 'in the breaks'], c: 2 },
      { q: 'What do the children in Tokyo do after school?', op: ['They do karate.', 'They swim.', 'They play soccer.'], c: 0 },
      { q: 'Some children help their parents. They help with …', op: ['homework and computers.', 'the car and the garden.', 'shopping and preparing food.'], c: 2 },
      { q: 'What do the children do at the end of the day?', op: ['They go to school.', 'They have dinner and go to bed.', 'They meet friends at a club.'], c: 1 }
    ]
  }
});
