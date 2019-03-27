$("#KoiFinal").on("loadeddata", function() {
	document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
});

var timer = 0;
var num = 150;
var selectedhome = $("#nav-home");
var selectedcase = $("#nav-case");
var selectedcontact = $("#nav-contact");

function caseActive(){
	selectedhome.removeClass("active");
	selectedcontact.removeClass("active");
	selectedcase.addClass("active");
}

function contactActive(){
	selectedcase.removeClass("active");
	selectedhome.removeClass("active");
	selectedcontact.addClass("active");
}

function homeActive(){
	selectedcase.removeClass("active");
	selectedcontact.removeClass("active");
	selectedhome.addClass("active");
}

$(window).bind('scroll', scrollWindowBind);

function scrollBind() {
	$(window).delay(800).bind('scroll', scrollWindowBind);
}

function scrollWindowBind() {
	if ($(window).scrollTop()>num){
        $('.menu').addClass('scrolled');
        console.log("scroll working");
    } else{
        $('.menu').removeClass('scrolled');
    };

	if(($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)){
		contactActive();
	} else if ($(window).scrollTop() > (window.innerHeight - 100)){
		caseActive();
	} else {
		homeActive();
	};
}

function smoothScroll(hash){
	$(window).unbind('scroll');
	$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
	});
	setTimeout(scrollBind, 800);
};

$(document).ready(function(){
	// Add smooth scrolling to all links
	if(window.location.href !== "index.html" || window.location.href !== "/"){
		$(".NI").on('click', function(event){
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();
				// Store hash
				var hash = this.hash;
				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				smoothScroll(hash);
			} // End if
		});

		selectedhome.on('click', function(event) {
			homeActive();
		});

		selectedcase.on('click', function(event) {
			caseActive();
		});

		selectedcontact.on('click', function(event) {
			contactActive();
		});

	} else {
		homeActive();
	}

});


