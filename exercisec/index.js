
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;


  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;
  newSentence = newSentence.toUpperCase();


  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;
  newSentence = newSentence.italics();


  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;
  newSentence = newSentence.replace(' stayed ', "<span style='color: red;'> are staying </span>");
  newSentence = newSentence.replace(' read ', "<span style='color: red;'> are reading </span>");
  newSentence = newSentence.replace(' listened, ', "<span style='color: red;'> listening, </span>");
  newSentence = newSentence.replace(' rested, ', "<span style='color: red;'> resting, </span>");
  newSentence = newSentence.replace(' exercised, ', "<span style='color: red;'> exercising, </span>");
  newSentence = newSentence.replace(' made ', "<span style='color: red;'> making </span>");
  newSentence = newSentence.replace(' learned ', "<span style='color: red;'> learning </span>");
  newSentence = newSentence.replace(' listened ', "<span style='color: red;'> listening </span>");
  newSentence = newSentence.replace(' meditated. ', "<span style='color: red;'> meditating. </span>");
  newSentence = newSentence.replace(' began ', "<span style='color: red;'> are beginning </span>");
  newSentence = newSentence.replace(' healed. ', "<span style='color: red;'> are healing. </span>");


  output.innerHTML = newSentence;
}


let input = document.querySelector('#sentence');

input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
