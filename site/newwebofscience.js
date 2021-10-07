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
		swufe_list = result.find("span[class$='none']");
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
			
			let source_cn = result.find("span[lang='zh-cn']");
			let name_cn = source_cn.text().trim();
			if (name_cn.length != 0) {
				for (let getRankingSpan of newwebofscience.rankSpanListSwufe) {
					source_cn.after(getRankingSpan(name_cn));
				}
			} else {
				let source_cn2 = result.find("button[lang='zh-cn']");
				let name_cn2 = source_cn2.text().trim();
				if (name_cn2.length != 0) {
					for (let getRankingSpan of newwebofscience.rankSpanListSwufe) {
						source_cn2.after(getRankingSpan(name_cn2));
					}
				}
			}
			
		}
	});
}
