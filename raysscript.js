const stage = document.getElementById('stage');
const lineCount = 180;
const circleCount = 60;
const svgNS = "http://www.w3.org/2000/svg";

const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("viewBox", "0 0 1000 1000");

// Generate Lines
for (let i = 0; i < lineCount; i++) {
    const angle = (i * 360) / lineCount;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", "500");
    line.setAttribute("y1", "500");
    line.setAttribute("x2", "500");
    line.setAttribute("y2", "0");
    line.setAttribute("class", "burst-line");
    line.setAttribute("transform", `rotate(${angle} 500 500)`);
    svg.appendChild(line);
}

// Generate Circles
for (let i = 0; i < circleCount; i++) {
    const circle = document.createElementNS(svgNS, "circle");
    const angle = Math.random() * 360;
    const distance = 100 + Math.random() * 350;
    const rad = (angle * Math.PI) / 180;
    const cx = 500 + distance * Math.cos(rad);
    const cy = 500 + distance * Math.sin(rad);

    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", Math.random() * 2 + 1);
    circle.setAttribute("class", "pulse-circle");
    circle.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
    circle.style.setProperty('--delay', `${Math.random() * 5}s`);
    svg.appendChild(circle);
}

stage.appendChild(svg);