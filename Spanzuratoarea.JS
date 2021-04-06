let gameWords = ["AMADEUS", "ISTORICAL", "SOCIAL", "EMACNIPAT", "SOBOLAN", "DISTRUGERE", "MODERNISM", "PLICTISEALA", "CRUCIADA", "PUTERE"];/// here I have to add more words
let arrayWord = [], leatersArray = [], x = 0, leaterPosition = new Array(100), livesGame = 0, sameLetter = 0, stopGame = true, sanse = 4;

function StartGame() {
    if(stopGame == true) {
        stopGame = false;
        let randomNumber = Math.floor(Math.random() * gameWords.length);
        for(let i = 0; i < gameWords[randomNumber].length; ++i) {
            leaterPosition[i] = 0;
        }
        let index = gameWords[randomNumber], half = index.length / 2;
        half = Math.floor(half);
        if(x > 0) {
            document.getElementById("wordletter").innerHTML = '';
        }
        for(let i = 0; i < index.length; ++i) {
            if(i == 0 || i == index.length - 1 || i == half) {
                document.getElementById("wordletter").innerHTML += index[i] + " ";
            } else {
                document.getElementById("wordletter").innerHTML += "... ";
            }
        }
        ++x;
        document.getElementById("inputLetter").onclick = function changeContent() {
            let winnerStop = index.length;
            document.getElementById("wordletter").innerHTML = '';
            let checkLetter = document.getElementById("userLetter").value.toUpperCase();
            document.getElementById("userLetter").value = '';
            for(let i = 0; i < index.length; ++i) {
                if(checkLetter == index[i] && i != 0 && i != half && i != index.length - 1) {
                    if(livesGame <= gameWords.length) { 
                        leaterPosition[i]++;
                        if(leaterPosition[i] > 1 ) {
                            document.getElementById("existingLetter").innerHTML = "Litera deja exista";
                        } else {
                            document.getElementById("existingLetter").innerHTML = "";
                        }
                        console.log(leaterPosition[i]);
                    }
                } 
            }
            if(livesGame == 4) {
                document.getElementById("finalGame").innerHTML = "Ai pierdut";
            }
            let n = index.search(checkLetter);
            if(n == -1) {
                if(sanse > 0) {
                document.getElementById("finalGame").innerHTML = "Mai ai " + sanse + " sanse!";
                --sanse;
                }
                if(livesGame == 0) {
                    for(let i = 0; i < 4; ++i) {
                        document.getElementById("gameBody").innerHTML += " " + "<br>";
                    }
                    document.getElementById("gameBody").innerHTML += "_ |----_";
                } if(livesGame == 1) {
                    document.getElementById("gameBody").innerHTML = " " + "<br>";
                    for(let i = 0; i < 2; ++i) {
                        document.getElementById("gameBody").innerHTML += " " + "<br>";
                    }
                    document.getElementById("gameBody").innerHTML += "|    / \\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "_ |----_";
                } if(livesGame == 2) {
                    document.getElementById("gameBody").innerHTML = " " + "<br>";
                    for(let i = 0; i < 1; ++i) {
                        document.getElementById("gameBody").innerHTML += " " + "<br>";
                    }
                    document.getElementById("gameBody").innerHTML += "| /|\\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "|    / \\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "_ |----_";
                } if(livesGame == 3) {
                    document.getElementById("gameBody").innerHTML = " " + "<br>";
                    document.getElementById("gameBody").innerHTML += "| O " + "<br>";
                    document.getElementById("gameBody").innerHTML += "| /|\\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "|    / \\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "_ |----_";
                } if(livesGame == 4) {
                    document.getElementById("gameBody").innerHTML = " ";
                    document.getElementById("gameBody").innerHTML += "__" + "<br>";
                    document.getElementById("gameBody").innerHTML += "| O " + "<br>";
                    document.getElementById("gameBody").innerHTML += "| /|\\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "|    / \\" + "<br>";
                    document.getElementById("gameBody").innerHTML += "_ |----_";
                }
                ++livesGame;
            }
            for(let i = 0, j = 0; i < index.length && j <= winnerStop; ++i) {
                if(i == 0 || i == index.length - 1 || i == half || leaterPosition[i] >= 1) {
                    document.getElementById("wordletter").innerHTML += index[i] + " ";
                    ++j;
                    if(j == winnerStop) {
                        alert("Ai castigat");
                    }
                } else {
                    document.getElementById("wordletter").innerHTML += "... ";
                }
            }
        }
    }
}
