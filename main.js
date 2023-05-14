const words = ["flowers", "cheetah", "cupcake", "apple"];

const word = words[Math.floor(Math.random() * words.length)];

const answerArray = [];

for (let i = 0; i < word.length; i++){

  answerArray[i] = "_";
}

const remainingLetters = word.length;

while (remainingLetters > 0) {
  console.log(answerArray.join(" "));
}


const guess = prompt("Guess a letter to play");

if (guess.length !== 1){
  console.log("Please only enter one letter.");
}
else {
for (let j = 0; j < word.length; j++){
  if(word[j] === guess){
    answerArray[j] = guess;
    remainingLetters--;
  }
}

}

console.log(answerArray.join(" "));
console.log("You did it! The answer was " + word);