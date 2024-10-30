function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("😐 Please enter both names to calculate the love percentage!");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `💘 ${name1} and ${name2}'s Love Percentage: ${lovePercentage}% 💘`;

    if (lovePercentage < 30) {
      result.innerHTML +=
        "😔 Not a match made in heaven. Keep looking for your soulmate! 👫";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML +=
        "😉 There's a spark! Give it a try and see where the love takes you! 💕";
    } else {
      result.innerHTML +=
        " 💗 Perfect match! Love is in the air, and it's meant to be! 💘";
    }
  }
}
