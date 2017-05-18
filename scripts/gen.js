var subPs = {};
subPs.options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
subPs.subNum = 0;
subPs.addRow = function () {
	subPs.subNum++;
	var perm = subPs.subNum <= 4 ? ' class="permanent"' : '';
	$(".subpatterns").append('<select' + perm + ' data-sub="' + subPs.subNum + '" data-sel="-"></select>');
	var $sub = $('[data-sub="' + subPs.subNum + '"]');
	$sub.append('<option value="-" selected>-</option>');
	for (var i = 0; i < subPs.options.length; i++) {
		var val = subPs.options[i];
		$sub.append('<option value="' + val + '">' + val + '</option>');
	}
};
subPs.selectSub = function (subSel, selection) {
	var $sub = $('[data-sub="' + subSel + '"]');
	$sub.val(selection).change();
	$sub.data("sel", selection);
}
subPs.checkDupes = function () {
	var dupeVals = [];
	console.log($("select").length);
};
subPs.startup = function (custom) {
	function addStartData() {
		for (var i = 1; i <= Object.keys(subPs.data.subpatterns).length + 1; i++) {
			subPs.addRow();
			if (subPs.data.subpatterns["sub" + i] !== undefined) {
				var selected = subPs.data.subpatterns["sub" + i].selected;
				subPs.selectSub(i, selected);
			}
		}
		subPs.checkDupes();
	}
	if (custom) {
		// load the custom data
	} else {
		var json = $.getJSON("../data/gen.json", function (json) {
			subPs.data = json;
			addStartData();
		});
	}
};

$(".gen").ready(function () {
	subPs.startup(false);
});