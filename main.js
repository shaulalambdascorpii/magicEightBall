function myFunction() {

    let randomNumber = Math.floor(Math.random() * 8);

    if (randomNumber === 0) {
      eightBall = "It is certain";
    } else if (randomNumber === 1) {
      eightBall="It is decidely so";
    } else if (randomNumber === 2) {
      eightBall = "so what";
    } else if (randomNumber === 3) {
      eightBall = "It is ultimately so";
    } else {
      eightBall = "it was a high number";
    }

document.getElementById("demo").innerHTML("hello");

};