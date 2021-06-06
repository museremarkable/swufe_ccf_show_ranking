const zhiwang = {};

zhiwang.rankingSpanProvider = [];

zhiwang.start = function() {
	setInterval(function() {
		zhiwang.addRankings();
	}, 2000);
}


zhiwang.addRankings = function() {
	var results = $("td.source a");

	results.each(function(index) {
		let result = $(this);
		var parent = result.parent("td");
		var flag = $(parent);

		if (flag.find("span").length == 0) {
			let source = result.text();
			if (source.length != 0) {
				let name = source;
				for (let getRankingSpan of zhiwang.rankingSpanProvider) {
					result.after(getRankingSpan(name));
				}
			}
		}
	});
};
