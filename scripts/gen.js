var subpatterns = function () {
	var self = this;
	this.options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.used = [];
	this.remaining = this.options;
	this.subNum = 4;
	this.addSub = function (selection, num) {
		var $sub = num !== null ? $(".sub" + num) : $(".sub" + self.subNum);
		var noneSel = selection !== null ? "" : " selected";
		console.log($sub);
		console.log(noneSel);
		$sub.html('<option value="-"' + selected + '>-</option>');
		for (var i = 0; i < self.remaining.length; i++) {
			var val = self.remaining[i];
			if (self.remaining[i] === selection) {
				$sub.append('<option value="' + selection + '" selected>' + selection + '</option>');
				console.log("append selected");
			} else {
				$sub.append('<option value="' + val + '">' + val + '</option>');
				console.log("append");
			}
		}
		evalUsed();
		evalRemaining();
	}

	function evalUsed() {
		var currUsed = [];
		for (var i = 0; i <= self.subNum; i++) {
			var dataSel = $(".sub" + i).attr("data-sel");
			currUsed.push(dataSel);
		}
		currUsed.sort();
		self.used = currUsed;
	}

	function evalRemaining() {
		var currRemaining = self.options;
		for (var i = 0; i < self.used.length; i++) {
			var ind = currRemaining[self.used[i]];
			if (ind > -1) {
				currRemaining.splice(ind, 1);
			}
		}
		currRemaining.sort();
		self.remaining = currRemaining;
	}
};

$(document).ready(function () {
	console.error();
	console.log("ready");
	subpatterns.addSub("V", 1);
	subpatterns.addSub("C", 2);
	subpatterns.addSub("N", 3);
	subpatterns.addSub();
});