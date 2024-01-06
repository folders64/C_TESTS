document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element
    const canvas = document.getElementById("bookshelfCanvas");
    const context = canvas.getContext("2d");

    // Draw bookshelf
    context.beginPath();
    //context.moveTo(50, 50);
    //context.lineTo(750, 50);
    context.moveTo(50, 200);
    context.lineTo(750, 200);
    context.moveTo(50, 350);
    context.lineTo(750, 350);
    context.moveTo(50, 500);
    context.lineTo(750, 500);
    context.moveTo(50, 650);
    context.lineTo(750, 650);
    //context.moveTo(50, 800);
    //context.lineTo(750, 800);
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.stroke();

    //rotated text
    context.font = "15px Source Code Pro";
    context.fillStyle = "#000";

    context.save();
    context.translate(83, 165);
    context.fillText("newbook--", 0, 0);
    context.restore();

    context.save();
    context.translate(90, 180);
    context.fillText("newbook----", 0, 0);
    context.restore();

    context.save();
    context.translate(80, 195);
    context.fillText("newbook------", 0, 0);
    context.restore();

    context.save();
    context.translate(545, 193);
    context.rotate(-Math.PI / 2);
    context.fillText("newbook------", 0, 0);
    context.restore();

    context.save();
    context.translate(563, 193);
    context.rotate(-Math.PI / 1.95);
    context.fillText("newbook", 0, 0);
    context.restore();

    context.save();
    context.translate(585, 193);
    context.rotate(-Math.PI / 1.9);
    context.fillText("a brief history", 0, 0);
    context.fillText("of time", 0, 15);
    context.restore();

    context.save();
    context.translate(620, 193);
    context.rotate(-Math.PI / 2.15);
    context.fillText("Atomic Habits", 0, 0);
    context.restore();

    context.save();
    context.translate(650, 195);
    context.rotate(-Math.PI / 2);
    context.fillText("the subtle art", 0, 0);
    context.fillText("of not giving", 0, 15);
    context.fillText("a fuck", 0, 30);
    context.restore();

    context.save();
    context.translate(700, 195);
    context.rotate(-Math.PI / 1.9);
    context.fillText("book 4", 0, 0);
    context.restore();

    context.save();
    context.translate(730, 190);
    context.rotate(-Math.PI / 1.6);
    context.fillText("book 5", 0, 0);
    context.restore();
});