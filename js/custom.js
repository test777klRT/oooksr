(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});
})(jQuery);


// Get the navbar
let navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;
let sticky2 = sticky + 10;
var introHeight = document.querySelector(".intro");

myFunction();
window.onscroll = function() {myFunction()};



function myFunction() {
	if (window.pageYOffset == sticky) {
		let cstOpositu = document.querySelector('.bg-light');
		let bgT = document.querySelector('.navbar-brand');
		bgT.style.backgroundColor = "initial";
		let bgT1 = document.querySelector('.navbar');
		bgT1.style.boxShadow = "0px 18px 10px rgba(248,249,250,.425)";
		cstOpositu.style.setProperty('--bs-bg-opacity', '0.45');
		let logoCST = document.querySelector('.navbar-brand');
		logoCST.style.left = '-300px';
	}
	if(window.pageYOffset <= introHeight.offsetHeight){
		let logoCST = document.querySelector('.navbar-brand');
		logoCST.style.left = '-300px';
	}
	if(window.pageYOffset > introHeight.offsetHeight/2){
		let logoCST = document.querySelector('.navbar-brand');
		logoCST.style.left = 0;
	}
	if(window.pageYOffset > sticky2) {
		let cstOpositu = document.querySelector('.bg-light')
		cstOpositu.style.setProperty('--bs-bg-opacity', '1');
		let bgT = document.querySelector('.navbar');
		bgT.style.boxShadow = "0px 5px 5px rgba(61, 147, 121,.8)";
	}
};

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#navbar-example'
});

