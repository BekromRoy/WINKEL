function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Pre-loder
var preloder=document.getElementById('loading');
  function hariyaloder(){
    preloder.style.display='none';
}

// nav slide
var pos = document.documentElement;
	pos.addEventListener("mousemove", e => {
		pos.style.setProperty('--x', e.clientX + "px");
		pos.style.setProperty('--y', e.clientY + "px");
	})

// game logo
function game_error() {
	swal("Error !", "To play this game you have to Sign In !", "error");
}

// game logo
function music_error() {
	swal("Error !", "To play this music you have to Sign In !", "error");
}

// scroll bar
var progressbar=document.getElementById("progressbar");
var percent=document.getElementById("percent");
var totalHeight=document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
  var progress=(window.pageYOffset/totalHeight)*100;
  progressbar.style.height=progress+"%";
  //percent.innerHTML="Page Scrolled "+ Math.round(progress)+"%"
}