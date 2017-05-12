loadContent = function loadContent(file) {
	$(".app").load(file + ".php ." + (file === "index" ? "home" : file));
}

$(document).ready(function () {
	$(".menu-item").click(function (e) {
		e.preventDefault();
		var data = $(this).attr("href");
		$(".app").fadeOut(250, function () {
			loadContent(data);
			$(".app").fadeIn(250);
		});
		if (data === "index") {
			document.title = "Langua | Language Tools";
		} else {
			document.title = "Langua | " + data.slice(0, 1).toUpperCase() + data.slice(1);
		}
		history.pushState(data, data, data);
	});

	window.addEventListener("popstate", function (e) {
		var data = e.state;
		$(".app").fadeOut(250, function () {
			if (data === null) {
				loadContent("index");
				document.title = "Langua | Language Tools";
			} else {
				loadContent(data);
				document.title = "Langua | " + data.slice(0, 1).toUpperCase() + data.slice(1);
			}
			$(".app").fadeIn(250);
		});
	});
});