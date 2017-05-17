function Subpatterns() {
	var self = this;
	this.options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.used = [];
	this.remaining = this.options;
	this.subNum = 0;
	this.addRow = function () {
		self.subNum++;
		var perm = self.subNum <= 4 ? ' class="permanent"' : '';
		$(".subpatterns").append('<select' + perm + ' data-sub="' + self.subNum + '" data-sel="-"></select>');
		var $sub = $('[data-sub="' + self.subNum + '"]');
		$sub.append('<option value="-" selected>-</option>');
		for (var i = 0; i < self.remaining.length; i++) {
			var val = self.remaining[i];
			$sub.append('<option value="' + val + '">' + val + '</option>');
		}
	};
	this.removeRow = function (row) {
		var $sub = $('[data-sub="' + row + '"]');
		$sub.remove();
	};
	this.selectSub = function (subSel, selection) {
		var $sub = $('[data-sub="' + subSel + '"]');
		$sub.val(selection).change();
		//$(sub).data('sel', selection);
		//$(sub + ' [value="' + selection + '"]').attr("selected, selected");
		evalUsed();
		evalRemaining();
		self.cleanLists();
	}
	this.cleanLists = function () {
		for (var i = 1; i <= self.subNum; i++) {
			var $sub = $('[data-sub="' + i + '"]');
			var $options = $sub.children();
			for (var j = 0; j < $options.length; j++) {
				if ($options[j].innerText !== $sub.data("sel")) {
					if (self.used.indexOf($options[j].innerText) > -1) {
						$options[j].remove();
					}
				}
			}
		}
	};

	function evalUsed() {
		var currUsed = [];
		for (var i = 1; i <= self.subNum; i++) {
			var val = $('[data-sub="' + i + '"]').data("sel");
			currUsed.push(val);
		}
		if (currUsed.indexOf("-") > -1) {
			currUsed.splice(currUsed.indexOf("-"), 1);
		}
		currUsed.sort();
		self.used = currUsed;
		console.log(self.used);
	}

	function evalRemaining() {
		var currRemaining = self.options;
		for (var i = 0; i < self.used.length; i++) {
			var ind = currRemaining.indexOf(self.used[i]);
			if (ind > -1) {
				currRemaining.splice(ind, 1);
			}
		}
		currRemaining.sort();
		self.remaining = currRemaining;
		console.log(self.remaining);
	}
}

var subpatterns = new Subpatterns();

$(".gen").ready(function () {
	for (var i = 1; i <= 4; i++) {
		subpatterns.addRow();
	}

	subpatterns.selectSub(1, "V");
	subpatterns.selectSub(2, "C");
	subpatterns.selectSub(3, "N");
});