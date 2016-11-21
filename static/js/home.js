// toggle movie like

var likeMainVideoIcon = document.getElementById("html-main-video-section").getElementsByClassName('fa-heart-o')[0];
var dislikeMainVideoIcon = document.getElementById("html-main-video-section").getElementsByClassName('fa-heart')[0];

// should get it from db
var likeMainVideo = false;

var addToggleIconListener = function(icon){
	icon.addEventListener("click", function(){
		likeMainVideo = !likeMainVideo;
	});
}

addToggleIconListener(likeMainVideoIcon,likeMainVideo );
addToggleIconListener(dislikeMainVideoIcon, likeMainVideo);

// send movie like to database




