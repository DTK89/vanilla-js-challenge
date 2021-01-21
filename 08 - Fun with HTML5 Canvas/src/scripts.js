const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");

const selectors = document.querySelectorAll(".controls input");
let wackyWidth = document.querySelector("#wacky");
let rainbowColors = document.querySelector("#rainbow");

//Canvas default properties
canvas.width = 750;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) {
    return;
  }
  if (rainbowColors) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  }
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  if (rainbowColors) {
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }

  if (wackyWidth) {
    if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }
}

function handleChange(e) {
  ctx.lineWidth = this.value;
  ctx.strokeStyle = this.value;
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

wackyWidth.addEventListener("click", () => (wackyWidth = !wackyWidth));
rainbowColors.addEventListener("click", () => (rainbowColors = !rainbowColors));
selectors.forEach((input) => input.addEventListener("change", handleChange));
selectors.forEach((input) => input.addEventListener("mousemove", handleChange));
