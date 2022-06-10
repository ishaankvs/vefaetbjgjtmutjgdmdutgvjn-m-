noseX=0;
noseY=0;
function preload(){
   clown=loadImage('https://i.postimg.cc/Jtw3zp2k/istockphoto-518678717-1024x1024.jpg');
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function draw(){
    image(video,0,0,640,480);
   image(clown,noseX,noseY,200,200);
}
function take_snapshot(){
    save('a_fliterd_image.png');
}

    
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x+89;
        noseY=results[0].pose.nose.y+40;
        console.log("nose x="+ noseX);
        console.log("nose y="+ noseY);
    }
}