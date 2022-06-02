const pointer = document.getElementById('pointer')!;

addEventListener('mousemove', (e) => {
    pointer.style.left = (e.clientX + 20) + "px";
    pointer.style.top = (e.clientY + 20) + "px";
});