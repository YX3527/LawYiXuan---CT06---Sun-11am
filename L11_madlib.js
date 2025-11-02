// let inputNoun, inputVerb, inputAdjective, inputAdverb, inputPlace; // input variables

// let btnGenStory;

// let storyText, storyTemplate;

// function setup(){
//     createCanvas(400, 600);

//     // create the inputs
//     inputNoun = createInput("cat");
//     inputNoun.position(200, 100);

//     inputVerb = createInput("swim");
//     inputVerb.position(200, 150);

//     inputAdjective = createInput("happy");
//     inputAdjective.position(200, 200);

//     inputAdverb = createInput("happily");
//     inputAdverb.position(200, 250);

//     inputPlace = createInput("Ang Mo Kio");
//     inputPlace.position(200, 300);

//     // add a button
//     btnGenStory = createButton("Generate Story");
//     btnGenStory.position(200, 350);
//     btnGenStory.mousePressed(buttonStoryClicked) // calls a function

//     // define the values for storyTemplate
//    storyTemplate = ["the {adjective} {noun} went {verb} at {place}.",
//     " Once upon a time, a {noun} {verb} {adverb} {adjective} at {place}"
//    ];

  
// }



// function draw(){
//     background("teal");

//     // Labels
//     push();
//     fill("white");
//     textSize(18);
//     textAlign(LEFT, TOP);
//     textFont("CONSOLAS");
//     text("Noun:", 50, 100);
//     text("Verb:", 50, 150);
//     text("Adjective:", 50, 200);
//     text("Adverb", 50, 250);
//     text("Place:", 50, 300);
//      //display the story text
//     text(storyText, 50, 450, 200, 100);//
//     pop();


    
// }

// // call this function when mouse is pressed
// function buttonStoryClicked(){
//     // console.log("this button is being clicked.");
//     // console.log(inputNoun.value());
//      ranstory = random(storyTemplate); // choose randomly from the array
// // let's join everything back
//    storyText = ranstory.replace("{noun}", inputNoun.value());
//    storyText = storyText.replace("{verb}", inputVerb.value());
//    storyText = storyText.replace("{adjective}", inputAdjective.value());
//    storyText = storyText.replace("{adverb}", inputAdverb.value());
//    storyText = storyText.replace("{place}", inputPlace.value());

//    console.log(storyText)
// }

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let nounInput, verbInput, adjectiveInput, adverbInput, placeInput;
let storyButton, randomButton;
let storyOutput;

let templates = [
"The {adjective} {noun} decided to {verb} {adverb} at the {place}.",
"One day, a {adjective} {noun} wanted to {verb} {adverb} in {place}.",
"Did you hear about the {adjective} {noun} that tried to {verb} {adverb} near {place}?"
];

// Arrays of predefined words
let nouns = ["dog", "teacher", "robot", "pirate", "alien"];
let verbs = ["jump", "dance", "sleep", "run", "code"];
let adjectives = ["happy", "angry", "funny", "brave", "sleepy"];
let adverbs = ["quickly", "loudly", "gracefully", "angrily", "silently"];
let places = ["park", "moon", "beach", "school", "mountain"];

function setup() {
createCanvas(600, 400);
background(240);

textSize(16);
fill(0);
text("Enter a noun:", 16, 40);
nounInput = createInput();
nounInput.position(150, 25);

text("Enter a verb:", 16, 80);
verbInput = createInput();
verbInput.position(150, 65);

text("Enter an adjective:", 16, 120);
adjectiveInput = createInput();
adjectiveInput.position(150, 105);

text("Enter an adverb:", 16, 160);
adverbInput = createInput();
adverbInput.position(150, 145);

text("Enter a place:", 16, 200);
placeInput = createInput();
placeInput.position(150, 185);

storyButton = createButton("Generate Story");
storyButton.position(150, 230);
storyButton.mousePressed(generateStory);

// Add "Random All" button
randomButton = createButton("Random All");
randomButton.position(270, 230);
randomButton.mousePressed(randomAll);

storyOutput = "";
}

function draw() {
background(240);

fill(0);
text("Enter a noun:", 16, 40);
text("Enter a verb:", 16, 80);
text("Enter an adjective:", 16, 120);
text("Enter an adverb:", 16, 160);
text("Enter a place:", 16, 200);

textSize(16);
fill(50, 0, 100);
textWrap(WORD);
text(storyOutput, 20, 280, 560);
}

function generateStory() {
let noun = nounInput.value();
let verb = verbInput.value();
let adjective = adjectiveInput.value();
let adverb = adverbInput.value();
let place = placeInput.value();

let randomIndex = floor(random(templates.length));
let story = templates[randomIndex];

story = story.replace("{noun}", noun)
.replace("{verb}", verb)
.replace("{adjective}", adjective)
.replace("{adverb}", adverb)
.replace("{place}", place);

storyOutput = story;
}

function randomAll() {
// Randomly pick one word from each array and set the input values
nounInput.value(random(nouns));
verbInput.value(random(verbs));
adjectiveInput.value(random(adjectives));
adverbInput.value(random(adverbs));
placeInput.value(random(places));
}