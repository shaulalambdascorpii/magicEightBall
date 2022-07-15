function myFunction() {

    let randomNumber = Math.floor(Math.random() * 8);

    if (randomNumber === 0) {
      eightBall = "It is certain to happen";
    } else if (randomNumber === 1) {
      eightBall="It is decidely so";
    } else if (randomNumber === 2) {
      eightBall = "It will never happen";
    } else if (randomNumber === 3) {
      eightBall = "It will happen in the next 5 years";
    } else if (randomNumber === 4) {
        eightBall = "It will happen in the next 20 years";
    } else if (randomNumber === 5) {
        eightBall = "It will happen in the next year";
    } else {
      eightBall = "It will happen in 50 years";
    }

document.getElementById("demo").innerHTML=(eightBall);

};