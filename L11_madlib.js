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

