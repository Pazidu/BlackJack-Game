function main() {
  let confirm = document.getElementById("result").innerHTML;
  if (confirm == "You have Lose !!!") {
    alert("Game over, Please restart the game");
  } else {
    let x;
    do {
      x = Math.floor((Math.random() * 100) / 7.6);
    } while (x == 0);

    let currentTT = parseInt(document.getElementById("total").innerHTML);
    let preTotal = currentTT + x;
    document.getElementById("total").innerHTML = preTotal;

    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 280;

    document.body.appendChild(img);

    if (preTotal < 21) {
      document.getElementById("result").innerHTML = "Generate a new card !";
    } else if (preTotal == 21) {
      document.getElementById("result").innerHTML = "You have won !!!";
      alert("Congratulations, You have won !");
      document.getElementById("btn-res").style.display = "block";
      document.getElementById("result").style.color = "green";
    } else if (preTotal > 21) {
      document.getElementById("result").innerHTML = "You have Lose !!!";
      alert("Sorry, Try again !");
      document.getElementById("btn-res").style.display = "block";
      document.getElementById("result").style.color = "red";
      document.getElementById("total").style.color = "red";
    }
  }
}

function restart() {
    location.reload();
  }