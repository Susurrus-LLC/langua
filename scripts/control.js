// Using pushState to dynamically control the URL for a Single Page Application: http://adkgroup.com/insights/single-page-applications-spa-and-seo-problem
var ui = {};

var controlView = '<div class="control"><p class="notice">This tool is still under development</p></div>';

ui.switchViewTo = function (view) {
	switch (view) {
		case "control":
			$(".app").fadeOut(250, function () {
				$(".app").html(controlView).fadeIn(250);
			});
			break;
		case "gen":
			$(".app").fadeOut(250, function () {
				$(".app").html(genView).fadeIn(250);
			});
			break;
		case "morph":
			$(".app").fadeOut(250, function () {
				$(".app").html(morphView).fadeIn(250);
			});
			break;
		case "deriv":
			$(".app").fadeOut(250, function () {
				$(".app").html(derivView).fadeIn(250);
			});
			break;
		case "frequen":
			$(".app").fadeOut(250, function () {
				$(".app").html(frequenView).fadeIn(250);
			});
			break;
	}
}

$(document).ready(function () {
	ui.switchViewTo("control");

	$(".menu-home").click(function () {
		ui.switchViewTo("control");
	});

	$(".menu-gen").click(function () {
		ui.switchViewTo("gen");
	});

	$(".menu-morph").click(function () {
		ui.switchViewTo("morph");
	});

	$(".menu-deriv").click(function () {
		ui.switchViewTo("deriv");
	});

	$(".menu-frequen").click(function () {
		ui.switchViewTo("frequen");
	});
})