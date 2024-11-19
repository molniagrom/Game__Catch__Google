export function CreatePlayer(par) {
  const element = document.createElement("span");
  const player1Element = document.createElement("img");
  if (par === "This is the first player") {
    player1Element.src = "./player_1.png";
  } else if (par === "This is the second player") {
    player1Element.src = "./player_2.png";
  }
  player1Element.alt = "Player Image";
  player1Element.style.width = "80%";
  player1Element.style.height = "80%";
  element.append(player1Element);
  return { element };
}
