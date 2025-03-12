function init() {
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('mouseover',handleMouseMove, false)
    const context = canvas.getContext('2d'); // Get Drawing area

    let started = false;

    function handleMouseMove(e) {
        let x, y;

        if(e.clientX                // If x position is specified ...
            || e.clientX == 0) {     // ... and it is not 0 ...
                x = e.clientX;
                y = e.clientY;
            }

            if(!started) {
                context.beginPath();
                context.moveTo(x, y);
                started = true;
            } else {
                context.lineTo(x, y);
                context.stroke();
            }
        
    }
}

document.addEventListener('DOMContentLoaded', init)