// for viewport height
function updateViewportHeight() {
    let viewportHeight = window.innerHeight;
    console.log("Viewport height:", viewportHeight, "pixels");
}

window.addEventListener('resize', updateViewportHeight);
// for viewport width
function updateViewportWidth() {
    let viewportWidth = window.innerWidth;
    console.log("Viewport width:", viewportWidth, "pixels");
}

window.addEventListener('resize', updateViewportWidth);

