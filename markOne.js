const readLine = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

const question = chalk.bold.yellow;
const wrong = chalk.bold.red;
const right = chalk.bold.green;

let score = 0;

let highScore = [
  (karan = {
    name: 'Karan',
    score: 9,
  }),
  (Arjun = {
    name: 'Arjun',
    score: 7,
  }),
  (Vijay = {
    name: 'Vijay',
    score: 4,
  }),
];

const qna1 = [
  (q1 = {
    q: 'What Indian city is the capital of two states?',
    o: ['Chennai', 'Mumbai', 'Kolkata', 'Chandigarh'],
    a: 'Chandigarh',
  }),
  (q2 = {
    q: 'What is the capital of Goa?',
    o: ['Vasco', 'Margao', 'Panaji', 'Old Goa'],
    a: 'Panaji',
  }),
  (q3 = {
    q: 'Delhi is located along which river?',
    o: ['Yamuna', 'Ganga', 'Indus', 'Godavari'],
    a: 'Yamuna',
  }),
  (q4 = {
    q: "When is India's independence day",
    o: ['January 26', 'August 15', 'January 15', 'August 26'],
    a: 'August 15',
  }),
  (q5 = {
    q: 'What body of water lies to the west of India?',
    o: ['Arabian Sea', 'Andaman Sea', 'Bay of Bengal', 'Coral Sea'],
    a: 'Arabian Sea',
  }),
];

const qna2 = [
  (q1 = {
    q: 'How many countries border India?',
    o: ['4', '5', '6', '7'],
    a: '6',
  }),
  (q2 = {
    q: 'What approximately is the area of india in square kilometers?',
    o: ['3000000', '1500000', '2500000', '2000000'],
    a: '3000000',
  }),
  (q3 = {
    q: 'Which state in India do we find the wettest regions?',
    o: ['Goa', 'Meghalaya', 'Assam', 'Nagaland'],
    a: 'Meghalaya',
  }),
  (q4 = {
    q: 'In which state is the Kaziranga National Park situated?',
    o: ['Mizoram', 'Gujarat', 'Uttar Pradesh', 'Assam'],
    a: 'Assam',
  }),
  (q5 = {
    q: 'Which is the most populous state in India?',
    o: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'West Bengal'],
    a: 'Uttar Pradesh',
  }),
];

const play = (qna) => {
  for (let q in qna) {
    log(question(qna[q].q));
    const index = readLine.keyInSelect(qna[q].o);
    log('\nYou selected  ' + qna[q].o[index] + '\n');
    if (qna[q].a === qna[q].o[index]) {
      log(right('Correct answer!\n'));
      score += 1;
    } else {
      log(
        wrong(
          'Opps...wrong answer!, correct answer is ' + right(qna[q].a) + '\n'
        )
      );
    }
  }
};

const userName = readLine.question(chalk.blue.bold('Enter your name \n'));

log(
  'Hey ' +
    chalk.red(userName) +
    ', welcome to this quiz on ' +
    chalk.bold.italic("Do You Know India \n'")
);

log(chalk.bgYellow.black('Rules'));
log(
  chalk.cyan(`1) 1 point for every correct answer.
2) No negative marks.
3) You proceed to next level only if you answer first five questions correctly`)
);

log('x------------x-------------x');

log(chalk.blue('\nSet 1\n'));

play(qna1);

if (score === 5) {
  log(chalk.greenBright('\nCongrats you made it to the second level\n'));
  log('x------------x-------------x');

  log(chalk.blue('\nSet 1\n'));

  play(qna2);
} else {
  log('Well played...try again to reach level 2!');
}

log(chalk.blue('\nWell played, your final score is: ' + score));

for (let player in highScore) {
  if (score > highScore[player].score) {
    log(
      chalk.cyan(
        `You made a new high score, send me this screenshot and i shall update the highcsores.
       You broke ${highScore[player].name}\'s record and your new rank is ${
          parseInt(player) + 1
        }`
      )
    );
    break;
  }
}
