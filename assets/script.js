$("#KoiStart").on("loadeddata", function() {
	document.querySelector(".header-text").style.WebkitAnimationPlayState = "running";
	/*$("#KoiStart").bind("ended", function() {
		$("#KoiCycle").css("visibility","visible");
	    $("#KoiCycle").play();
	});*/

});

//$("#KoiStart").defaultPlaybackRate = 0.5;

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

//PROJECT RENDERING

var numProjShown = 4;
var numProjTotal = 7;

var projects = {
  "proj0": {
    "title": "Facebook Ads Manager Research",
    "projName": "Ads Manager Onboarding",
    "desc": "Designing research prototype to understand how to decrease the cognitive gap by simplifying onboarding to help new users achieve success.",
    "link": "adsmanager.html",
    "picture": "assets/fb-prev.png",
  },
  "proj1": {
    "title": "Cognite Asset Data Insight",
    "projName": "Thresholds & Alerts",
    "desc": "Enabling process engineers to conduct efficient system monitoring by streamlining the process of setting up thresholds and complex alerts.",
    "link": "thresholds-alerts.html",
    "picture": "assets/cognite-prev2.png",
  },
  "proj2": {
    "title": "Microsoft Shared Experiences",
    "projName": "Smart Tagger",
    "desc": "Designing an intelligent tagging system for Office365 to improve content based search results and tag management for enterprise files.",
    "link": "smarttagger.html",
    "picture": "assets/smarttagger-prev.jpg",
  },
  "proj3": {
    "title": "Shopify App Feature",
    "projName": "Hatchful Onboarding",
    "desc": "Designing an application to simplify splitting costs with other people; incorporating new technologies such as scanning and parsing.",
    "link": "hatchful-onboarding.html",
    "picture": "assets/onboarding-prev.jpg",
  },
  "proj4": {
    "title": "Video Call Platform",
    "projName": "Big Blue Button",
    "desc": "Designing the interaction model of the BigBlueButton video and presentation platform to accommodate large (50+) users sessions.",
    "link": "bigbluebutton.html",
    "picture": "assets/bbb-prev.jpg",
  },
  "proj5": {
    "title": "Shopify Internal Tool",
    "projName": "Hatchful CMS",
    "desc": "Designing a scalable content management system to simplify the logo upload process and to manage features and states of logos.",
    "link": "hatchful-cms.html",
    "picture": "assets/cms-prev.jpg",
  },
  "proj6": {
    "title": "Queen's University Event",
    "projName": "Hackathon Design",
    "desc": "Rebranding QHacks to create a new recognizable brand image and voice that is consistent between different event products.",
    "link": "qhacks.html",
    "picture": "assets/qhacks-prev.jpg",
  },
}

function createProj(proj) {
  let title = projects[proj].title;
  let projName = projects[proj].projName;
  let desc = projects[proj].desc;
  let link = projects[proj].link;
  let picture = projects[proj].picture;

  var HTMLproj = `<div class='projItem ui two column grid' id="${proj}"><div class='column studyCard'><div class='studyHeader'>${title}</div><div class='studyTitle'>${projName}</div><div class='studyDesc'>${desc}</div><a class='seeMore' href="${link}">Learn more >></a></div><div class='column image-box'><a href="${link}"><img class='prev-img' src="${picture}"/></a><a class='proj-arrow' href="${link}"><img class="navigationArrow" src="assets/arrow-right_2@3x.png"></a></div></div>`

  var landingStudies = document.querySelector("#landingStudies");
  landingStudies.innerHTML += HTMLproj;
}

function deleteProj(proj) {
  $("#" + proj).remove();
}

function showHide() {
  let projItems = document.querySelectorAll(".projItem");
  let numProjItems = projItems.length;
  if (numProjItems < numProjShown+1) {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      createProj(proj);
    }
    moreProjects.innerHTML = "show less";
  } else {
    for (let x = numProjShown; x < numProjTotal; x++) {
      let proj = "proj" + x;
      deleteProj(proj);
    }
    moreProjects.innerHTML = "view more";
  }
}

for (let x = 0; x < numProjShown; x++) {
  let proj = "proj" + x;
  createProj(proj);
}

var moreProjects = document.querySelector("#moreProjects");
moreProjects.addEventListener('click', showHide);





