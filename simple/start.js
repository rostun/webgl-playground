//
// start here
//
function main() {
    const canvas = document.querySelector("#glCanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    console.log(gl);
    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    canvas.width = 400;
    canvas.height = 300;
    canvas.style.border = '1px solid gray';
}

window.onload = main;
