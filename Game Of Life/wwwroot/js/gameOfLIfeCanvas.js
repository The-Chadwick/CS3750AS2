﻿let canvas, ctx, tileSize;
let tiles = [];

let bw = bh = 800;

window.addEventListener('load', function () {
    canvas = document.getElementById('board');
    canvas.width = canvas.height = 800;
    canvas.addEventListener('mousedown', onDown, false);

    ctx = canvas.getContext('2d');

    tileSize = canvas.width / 16;
    tiles.push(new tile(10, 10, 255, 0, 0));
    tiles.push(new tile(5, 10, 255, 0, 0));
    tiles.push(new tile(5, 5, 0, 255, 255));
    // tiles.push(new tile(5, 10, 300));
    drawGrid();
});

function drawGrid() {
    // Draw Vertical lines
    for (let x = 0; x <= bw; x += 40) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, bh);
    }

    // Draw Horizontal lines
    for (let x = 0; x <= bh; x += 40) {
        ctx.moveTo(0, x);
        ctx.lineTo(bw, x);
    }

    // Set color and display lines
    ctx.strokeStyle = "black";
    ctx.stroke();
}

// Grabs X and Y cords
function onDown(event) {
    let cx = event.pageX;
    let cy = event.pageY;

    alert("X: " + cx + ' Y: ' + cy);
}


class tile {
    constructor(x, y, red, green, blue) {
        var _this = this;
        (function () {
            _this.x = x || null;
            _this.y = y || null;
            _this.red = red || 0;
            _this.green = green || 0;
            _this.blue = blue || 0;
        })();

        console.log(this);

        this.draw = function (ctx) {
            if (!_this.x || !_this.y) {
                console.log('error');
                return;
            }
            ctx.beginPath();
            ctx.rect(_this.x * tileSize, _this.y * tileSize, tileSize, tileSize);
            ctx.fillStyle = "rgb(" + _this.red + ', ' + _this.green + ', ' + _this.blue + ")";
            ctx.fill();
        };
    }
}
