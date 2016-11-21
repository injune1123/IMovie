// toggle movie like

var likeMainVideoIcon = document.getElementById("html-main-video-section").getElementsByClassName('fa-heart-o')[0];
var dislikeMainVideoIcon = document.getElementById("html-main-video-section").getElementsByClassName('fa-heart')[0];

// should get it from db
var likeMainVideo = false;

var addToggleIconListener = function(icon){
	icon.addEventListener("click", function(){
		likeMainVideo = !likeMainVideo;
console.log(likeMainVideo);
        
	});
}

addToggleIconListener(likeMainVideoIcon,likeMainVideo );
addToggleIconListener(dislikeMainVideoIcon, likeMainVideo);

console.log(likeMainVideo);
// send movie like to database




//add interval
var last_m=[],start;
var myVideo = document.getElementById("html-main-video");
myVideo.ontimeupdate = show;
myVideo.onplay = play;
myVideo.onpause= pause;
myVideo.onseeked= seeked;
myVideo.controls = true;

function seeked(){
        start = myVideo.currentTime;
        myVideo.play();
}
function show(){
        last_m.push(myVideo.currentTime);
}
function play() {
        start = myVideo.currentTime;
}
function pause() {
      
    console.log("watched interval:"+start+":"+last_m[last_m.length-3]);
        //upload interval here
    last_m=[];
}
function makeBig() {
    myVideo.width = 560;
}
function makeSmall() {
    myVideo.width = 320;
}
function makeNormal() {
    myVideo.width = 420;
}

