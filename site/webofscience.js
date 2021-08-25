const webofscience = {};

webofscience.rankSpanListSwufe = [];

webofscience.start = function () {
    webofscience.addRankings();
}

webofscience.addRankings = function () {
	let results = $("div.search-results-content");
    results.each(function (index) {
        let result = $(this);
        let source = result.find("div div:eq(3) value:first");
		let name = source.text().trim();
		
        if (name.length != 0) {
			for (let getRankingSpan of webofscience.rankSpanListSwufe) {
			    source.after(getRankingSpan(name.toUpperCase()));
			}
        }
		
    });
	let reference_results = $("div.reference-item-non-ar");
	reference_results.each(function (index) {
	    let reference_result = $(this);
	    let reference_source = reference_result.find("div:eq(1) value:first");
		let reference_name = reference_source.text().trim();
		
	    if (reference_name.length != 0) {
			for (let getRankingSpan of webofscience.rankSpanListSwufe) {
			    reference_source.after(getRankingSpan(reference_name.toUpperCase()));
			}
	    }
		
	});
	
}

