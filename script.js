// console.log("Hello World")
function getComputerChoice () {
    // Get random int between 0 and 2
    const randInt = Math.floor(Math.random() * 3);
    return ["rock","paper","scissors"].at(randInt)
}
