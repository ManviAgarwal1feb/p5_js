function preload(){

}

function setup(){
canvas=createCanvas(600,500);
canvas.position(200,400);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
fill(0,300,0)
rect(30,30,520,450);    
image(video,200,180,200,200);
tint(tint_color);
fill(0,0,200);
circle(40,40,60);
circle(40,465,60);
circle(550,40,60);
circle(550,465,60);

}

function take_snapshot(){
   save("filter.png");
}

function apply_filter(){
    tint_color=document.getElementById("filter_color").value;
}