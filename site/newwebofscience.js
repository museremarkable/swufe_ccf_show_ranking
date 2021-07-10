const newwebofscience = {};

newwebofscience.rankSpanListSwufe = [];

newwebofscience.start = function() {
	setInterval(function() {
		newwebofscience.addRankings();
	}, 500);
}

newwebofscience.addRankings = function() {
	let results = $("app-jcr-overlay");
	results.each(function(index) {

		let result = $(this);
		swufe_list = result.find("span[class^='swufe']");
		if (swufe_list.length == 0) {
			let source = result.find("span[lang='en']");
			let name = source.text().trim();

			if (name.length != 0) {
				for (let getRankingSpan of newwebofscience.rankSpanListSwufe) {
					source.after(getRankingSpan(name.toUpperCase()));
				}
			} else {
				let source2 = result.find("button[lang='en']");
				let name2 = source2.text().trim();
				if (name2.length != 0) {
					for (let getRankingSpan of newwebofscience.rankSpanListSwufe) {
						source2.after(getRankingSpan(name2.toUpperCase()));
					}
				}
			}
		}
	});
}
