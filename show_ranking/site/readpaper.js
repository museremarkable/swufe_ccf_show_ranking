const readpaper = {};

readpaper.rankSpanListSwufe = [];

readpaper.start = function() {
	setInterval(function() {
		readpaper.addRankings();
	}, 500);
}

readpaper.addRankings = function() {
	let results = $("div.paper-item");
	results.each(function(index) {
		
		let result = $(this);
		swufe_list = result.find("span[class$='none']");
		swufe_list2 = result.find("span.ccf-ranking");
		if (swufe_list.length == 0 && swufe_list2.length == 0) {
			let source = result.find("div.title");
			let name = result.find("span.block:first").text().replace('"','').trim();
			
			if (name.length != 0) {
				for (let getRankingSpan of readpaper.rankSpanListSwufe) {
					source.after(getRankingSpan(name.toUpperCase()));
				}
			} 
		}
	});
}
