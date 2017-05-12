// Using pushState to dynamically control the URL for a Single Page Application: http://adkgroup.com/insights/single-page-applications-spa-and-seo-problem
var ui = {};

ui.loadContent = function (file) {
	$(".app").load(file + ".php ." + (file === "index" ? "home" : file));
}

$(document).ready(function () {
	$(".menu-item").click(function (e) {
		e.preventDefault();
		var data = $(this).attr("data-page");
		$(".app").fadeOut(250, function () {
			ui.loadContent(data);
			$(".app").fadeIn(250);
		});
		history.pushState(data, data, data);
	});

	window.addEventListener("popstate", function (e) {
		var data = e.state;
		$(".app").fadeOut(250, function () {
			if (data === null) {
				ui.loadContent("index");
				document.title = "Langua | Language Tools";
			} else {
				ui.loadContent(data);
				document.title = "Langua | " + data;
			}
			$(".app").fadeIn(250);
		});
	});
});