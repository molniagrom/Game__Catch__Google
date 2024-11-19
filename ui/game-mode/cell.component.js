import {
  getGooglePosition,
  getPlayer1Position,
  getPlayer2Position,
  subscribe,
} from "../../state/data.js";
import { EVENTS } from "../../state/EVENTS.js";
import { GoogleImg } from "../createImgGoogle.js";
import { CreatePlayer } from "../createPlayer.js";

export function Cell(x, y) {
  console.log("Cell creating...");

  const element = document.createElement("td");
  element.classList.add("td-cent");

  const unsubscribe = subscribe((event) => {
    if (
      event.type === EVENTS.GOOGLE_JUMPED ||
      event.type === EVENTS.PLAYER_MOVED
    ) {
      if (
        (event.payload.newPositions.x === x &&
          event.payload.newPositions.y === y) ||
        (event.payload.prevPositions.x === x &&
          event.payload.prevPositions.y === y)
      ) {
        Cell.render(element, x, y);
      }
    }
  });

  Cell.render(element, x, y);

  return {
    element,
    cleanup: () => {
      unsubscribe();
    },
  };
}

Cell.render = (element, x, y) => {
  const googlePosition = getGooglePosition();
  const player1Position = getPlayer1Position();
  const player2Position = getPlayer2Position();

  // if (iAmNotPridelah) return;

  console.log("Cell rendering...");

  element.innerHTML = "";

  if (x === googlePosition.x && y === googlePosition.y) {
    const imgObject = GoogleImg();
    element.append(imgObject.element);
  }

  if (x === player1Position.x && y === player1Position.y) {
    const p1 = "This is the first player";
    const player1 = CreatePlayer(p1);
    element.append(player1.element);
  }

  if (x === player2Position.x && y === player2Position.y) {
    const p2 = "This is the second player";
    const player1 = CreatePlayer(p2);
    element.append(player1.element);
  }
};
