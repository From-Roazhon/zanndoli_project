export function setRandomBackground() {
    const images = [
        "gecko.jpg",
        "pogona.jpg",
        "pogona_2.jpg",
        "pogona_3.png",
        "snake.jpg",
        "snake_2.jpg"
    ];

    let randomBackground = images[Math.floor(Math.random()*images.length)];

    let randomBackgroundElement = document.querySelector("#random-background");

    randomBackgroundElement.style.background = `url('./assets/img/home/random/${randomBackground}')`;

}