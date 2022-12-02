/**
 * 特效：雪花
 */
import confetti from "canvas-confetti";
var duration = 15 * 1000 * 60;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/**
 * https://www.kirilv.com/canvas-confetti/
 */
(function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}());