let gameEngine = null;
let scene = null;
let sceneContext = null;
let px = 10;
let py = 10;
let gs = 20;
let tc = 20;
let ax = 15;
let ay = 15;
let xv = 1;
let yv = 0;
let trail = [];
let tail = 5;
let speed = 10;
let step = 0;
const width = 400;
const height = 400;
const doNextGameStep = (function () {
  return window ?
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      setTimeout(callback, 1000 / 60);
    } :
    function (callback) {
      setTimeout(callback, 1000 / 60);
    };
})();
const startGameEngine = function (callback) {
  gameEngine = callback;
  doGameEngineStep();
};
const setGameEngine = function (callback) {
  gameEngine = callback;
};
const doGameEngineStep = function () {
  gameEngine();
  doNextGameStep(doGameEngineStep);
};

export const initGame = () => {
  scene = document.getElementById('game');
  sceneContext = scene.getContext('2d');
  document.addEventListener("keydown",keyPush);

  startGameEngine(game);
};

const game = function () {
  if (step < speed) {
    step++;
  } else {
    step = 0;
    px += xv;
    py += yv;
    if (px < 0) {
      px = tc - 1;
    }
    if (px > tc - 1) {
      px = 0;
    }
    if (py < 0) {
      py = tc - 1;
    }
    if (py > tc - 1) {
      py = 0;
    }
    sceneContext.fillStyle = "black";
    sceneContext.fillRect(0, 0, width, height);

    sceneContext.fillStyle = "lime";
    for (let i = 0; i < trail.length; i++) {
      sceneContext.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
      if (trail[i].x === px && trail[i].y === py) {
        tail = 5;
        speed = 10;
      }
    }
    trail.push({x: px, y: py});
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax === px && ay === py) {
      tail++;
      speed = 11 - Math.round(tail / 3);
      ax = Math.floor(Math.random() * tc);
      ay = Math.floor(Math.random() * tc);
    }
    sceneContext.fillStyle = "red";
    sceneContext.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
  }
}

const keyPush = function (evt) {
  switch(evt.keyCode) {
    case 37:
      xv=-1;
      yv=0;
      break;
    case 38:
      xv=0;
      yv=-1;
      break;
    case 39:
      xv=1;
      yv=0;
      break;
    case 40:
      xv=0;
      yv=1;
      break;
    default:
      break;
  }
}
