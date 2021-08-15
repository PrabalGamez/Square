noseX=0;
noseY=0;
difference=0;
Left=0;
Right=0;

function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550,500);
    canvas.position(600, 100);

    poseNet=ml5.poseNet(video, modeL);
    poseNet.on('pose', gotPose);
}

function draw(){
    background("#F5E87F");
    fill("#DEBE73");
    stroke("#DED373");
    square(noseX, noseY, difference);
    document.getElementById("sqr_size").innerHTML=difference
}

function modeL(){
    console.log("The model has been loaded")
}

function gotPose(result){
    if(result.length > 0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log("NoseX = "+noseX+", NoseY = "+noseY);

        Left=result[0].pose.leftWrist.x;
        Right=result[0].pose.rightWrist.x;
        difference=floor(Left-Right);
        console.log("Left = "+Left+", Right = "+Right+", Diff = "+difference);
    }
}