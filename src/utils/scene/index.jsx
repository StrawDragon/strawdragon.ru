let gameEngine = null;
let scene = null;
let sceneContext = null;
let x = 10;
let y = 10;
const step = 1;
const size = 50;
const width = 600;
const height = 300;
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
}
const doGameEngineStep = function () {
  gameEngine();
  doNextGameStep(doGameEngineStep);
};

export const initGame = () => {
  scene = document.getElementById('game');
  sceneContext = scene.getContext('2d');

  startGameEngine(doGameStepRight);
};

const drawRect = function () {
  sceneContext.fillStyle = '#9f9fff';
  sceneContext.clearRect(0, 0, width, height);
  sceneContext.fillRect(x, y, size, size);
}

const doGameStepRight = function () {
  drawRect();
  x+= step;
  if (x >= width - size) {
    setGameEngine(doGameStepLeft);
  }
}

const doGameStepLeft = function () {
  drawRect();
  x-= step;
  if (x <= 0) {
    setGameEngine(doGameStepRight);
  }
}
