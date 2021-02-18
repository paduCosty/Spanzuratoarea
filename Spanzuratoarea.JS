let arrayString = ["AMADEUS", "ISTORICAL", "SOCIAL", "EMACNIPAT", "SOBLOAN", "DISTRUFERE", "MODERNISM", "PLICTISEALA", "CRUCIADA", "UTERE"];/// here I have to add more words
let arrayWord = [], leatersArray = [], x = 0, leater, leaterPosition = [], livesGame = 0;
function fucntionStartGame() {
    let randomNumber = Math.floor(Math.random() * 10); // If I add more words then here I have to increase the number for random
    let index = arrayString[randomNumber], half = index.length / 2;
    half = Math.floor(half);
    if(x > 0) {
        document.getElementById("wordLeater").innerHTML = '';
    }
    for(let i = 0; i < index.length; ++i) {
        if(i == 0 || i == index.length - 1 || i == half) {
            document.getElementById("wordLeater").innerHTML += index[i] + " ";
        } else {
            document.getElementById("wordLeater").innerHTML += "... ";
        }
    }
    ++x;
    document.getElementById("inputLeater").onclick = function changeContent() {
        let winnerStop = index.length;
        document.getElementById("wordLeater").innerHTML = '';
        leater = document.getElementById("leater").value;
        document.getElementById("leater").value = '';
        for(let i = 0; i < index.length; ++i) {
            if(leater == index[i]) {
                if(livesGame <= 10) { 
                    leaterPosition[i] = 1;
                }
            }
        }
        if(livesGame == 10) {
            document.getElementById("finalGame").innerHTML = "Ai pierdut";
        }
        let n = index.search(leater);
        if(n == -1) {
            if(livesGame == 0) {
                document.getElementById("gameBody").innerHTML = "__" + "<br>";
            } if(livesGame == 1) {
                document.getElementById("gameBody").innerHTML += "|";
            } if(livesGame == 2) {
                document.getElementById("gameBody").innerHTML += " O" + "<br>";
            } if(livesGame == 3) {
                document.getElementById("gameBody").innerHTML += "|  ";
            } if(livesGame == 4) {
                document.getElementById("gameBody").innerHTML += " /";
            } if(livesGame == 5) {
                document.getElementById("gameBody").innerHTML += "|";
            } if(livesGame == 6) {
                document.getElementById("gameBody").innerHTML += "\\" + "<br>";
            } if(livesGame == 7) {
                document.getElementById("gameBody").innerHTML += "|";
            } if(livesGame == 8) {
                document.getElementById("gameBody").innerHTML += " /";
            } if(livesGame == 9) {
                document.getElementById("gameBody").innerHTML +=" \\ " + "<br>";
            } if(livesGame == 10) {
                document.getElementById("gameBody").innerHTML += "_ |----_";
            }
            ++livesGame;
        }
        for(let i = 0, j = 0; i < index.length && j <= winnerStop; ++i) {
            if(i == 0 || i == index.length - 1 || i == half || leaterPosition[i] == 1) {
                document.getElementById("wordLeater").innerHTML += index[i] + " ";
                ++j;
                if(j == winnerStop) {
                    alert("Ai castigat");
                }
            } else {
                document.getElementById("wordLeater").innerHTML += "... ";
            }
        }
    }
}
