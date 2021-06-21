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

		if (flag.find("span").length < 3) {
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
