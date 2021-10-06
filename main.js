canvas=document.getElementById("olympic_canvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyl="grey";
ctx.lineWidth=1
ctx.rect(200,120,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(300,200,40,0,4*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(400,200,40,0,4*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(500,200,40,0,4*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(350,240,40,0,4*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(450,240,40,0,4*Math.PI);
ctx.stroke();
