const microsoft = {};

microsoft.rankingSpanProvider = [];

microsoft.start = function() {
	setInterval(function() {
		microsoft.addRankings();
	}, 2000);
}


microsoft.addRankings = function() {
	var results = $("div.paper div a.publication span.name");

	results.each(function(index) {
		let result = $(this);
		var parent = result.parent("a");
		var flag = $(parent);
		let flag1 = flag.find("span[class$='none']");
		let flag2 = flag.find("span.ccf-ranking");
		if (flag1.length == 0 && flag2.length == 0) {
			let source = result.text();
			if (source.length != 0) {
				let name = source;
				for (let getRankingSpan of microsoft.rankingSpanProvider) {
					result.after(getRankingSpan(name.toUpperCase()));
				}
			}
		}
	});
};
