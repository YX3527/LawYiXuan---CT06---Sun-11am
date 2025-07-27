/*
Task 1: Add the setup() function
*/
function setup() {
   createCanvas(600,400);
   background(220);//background(r, g, b)0-255eg. background(---,---,---)
}
function draw() {
// ellipse(100, 100, 80, 50);                        // x, y, width, height
// ellipse(200, 100, 80, 50);                        // x, y, diametre
// circle(300, 200, 150);                            //x, y, width, height
// circle(300, 200, 100);                                                          // ; is used. when dun hv can still work but when have alot
// rect(100, 100, 100, 150, 30, 10, 15, 5) ;                                              of codes, sometimes might not work
//triangle(30, 75, 58, 20, 86, 75);
//triangle(20, 40, 75, 40, 57, 32); 
quad(20, 20, 80, 20, 80, 80, 20, 80);//square
quad()

  // Challenge 2: A face using circle() function

  // Challenge 3: A house using rect() function

  // Challenge 4: A rocketship using triangle() function

  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
}