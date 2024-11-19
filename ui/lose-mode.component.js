import { resetGameStatus } from "../state/data.js";

export function LoseMode() {
  const element = document.createElement("div");
  element.classList.add("lose-container")

  LoseMode.render(element);

  return { element, cleanup: () => {} };
}

LoseMode.render = (element) => {
  const p = document.createElement("p");
  p.classList.add("p-result")
  p.append("GOOGLE ВЫИГРАЛ");
  element.append(p);

  const playAgainButtonElement = document.createElement("button");
  playAgainButtonElement.classList.add("button-lose")

  playAgainButtonElement.append("PLAY AGAIN 🚀");

  element.append(playAgainButtonElement);

  playAgainButtonElement.addEventListener("click", () => {
    resetGameStatus(); // status is reset via status
  });
};
