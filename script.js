const colors=['red', 'green','yello', 'pink','purp','blue','orange','white','skyblue'];
function changeColor(){
    const colorIndex= parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}