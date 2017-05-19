var subPs = {};
subPs.options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
subPs.subNum = 0;
subPs.addRow = function () {
	subPs.subNum++;
	var perm = subPs.subNum <= 4 ? " permanent" : "";
	$(".subpatterns").append('<div class="subps-row' + perm + '"><select data-sub="' + subPs.subNum + '" data-sel="-"></select><input type="text" data-subtext="' + subPs.subNum + '"></input></div>');
	var $sub = $('[data-sub="' + subPs.subNum + '"]');
	$sub.append('<option value="-" selected>-</option>');
	for (var i = 0; i < subPs.options.length; i++) {
		var val = subPs.options[i];
		$sub.append('<option value="' + val + '">' + val + '</option>');
	}
};
subPs.selectSub = function (subSel, selection, subPtn) {
	var $sub = $('[data-sub="' + subSel + '"]');
	var $subText = $('[data-subtext="' + subSel + '"]');
	$sub.val(selection).change();
	$sub.data("sel", selection);
	$subText.val(subPtn);
}
subPs.checkDupes = function () {
	var dupeVals = [];
	console.log($("select").length);
};
subPs.startup = function (custom) {
	function addStartData() {
		for (var i = 1; i <= Object.keys(subPs.data.subpatterns).length; i++) {
			subPs.addRow();
			if (subPs.data.subpatterns.hasOwnProperty("sub" + i)) {
				var selected = subPs.data.subpatterns["sub" + i].selected;
				var subPtn = subPs.data.subpatterns["sub" + i].subpattern;
				subPs.selectSub(i, selected, subPtn);
			}
		}
		subPs.addRow();
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