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

//frame
$("#phone1").click(function(){
  $("#iframe").attr("src","samsung1.html");
});
$("#phone2").click(function(){
  $("#iframe").attr("src","samsung2.html");
});
$("#phone3").click(function(){
  $("#iframe").attr("src","samsung3.html");
});
$("#phone4").click(function(){
  $("#iframe").attr("src","samsung4.html");
});
$("#phone5").click(function(){
  $("#iframe").attr("src","samsung5.html");
});

// scroll bar
var progressbar=document.getElementById("progressbar");
var percent=document.getElementById("percent");
var totalHeight=document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
  var progress=(window.pageYOffset/totalHeight)*100;
  progressbar.style.height=progress+"%";
  //percent.innerHTML="Page Scrolled "+ Math.round(progress)+"%"
}